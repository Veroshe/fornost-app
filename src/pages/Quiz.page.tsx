import { useMemo, useState } from 'react';
import { IconCheck, IconStar, IconTrophy } from '@tabler/icons-react';
import {
  Alert,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Progress,
  Radio,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import angryImage from '../assets/angry.png';
import happyImage from '../assets/happy.jpg';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Option {
  value: string;
  label: string;
}

interface RadioQuestion {
  id: number;
  question: string;
  type: 'radio';
  options: Option[];
  correctAnswer: string;
}

interface TextQuestion {
  id: number;
  question: string;
  type: 'text';
  correctAnswers: string[];
  placeholder?: string;
}

type QuizQuestion = RadioQuestion | TextQuestion;

interface SavedResult {
  completed: true;
  score: number;
  total: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const QUIZ_STORAGE_KEY = 'fornost_quiz_2026_result';
const WINNING_THRESHOLD = 8;
const QUIZ_SIZE = 10;

// ─── Question bank (29 questions) ────────────────────────────────────────────

const QUESTION_BANK: QuizQuestion[] = [
  {
    id: 1,
    question: 'Kto był adoptowanym podpiecznym Bilba?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Drogo' },
      { value: 'b', label: 'Frodo' },
      { value: 'c', label: 'Otho' },
      { value: 'd', label: 'Sam' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 2,
    question: 'Który hobbit nie udał się z Frodo do Rivendell?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Samwise Gamgee' },
      { value: 'b', label: 'Perigrin Brandybuck' },
      { value: 'c', label: 'Meriadoc Brandybuck' },
      { value: 'd', label: 'Perigrin Took' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 3,
    question:
      'Która z poniższych nazw NIE jest nazwą określającą istoty, które podążały tropem hobbitów z Shire do Rivendell?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Onodrim' },
      { value: 'b', label: 'Nazgul' },
      { value: 'c', label: 'Upiór Pierścienia' },
      { value: 'd', label: 'Ulairi' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 4,
    question: 'Podaj imię dowolnego członka Drużyny Pierścienia, który NIE był hobbitem',
    type: 'text',
    correctAnswers: ['aragorn', 'gimli', 'legolas', 'boromir', 'gandalf'],
    placeholder: 'Wpisz imię...',
  },
  {
    id: 5,
    question: 'Panem jakiego regionu był Elrond?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Lorien' },
      { value: 'b', label: 'Rivendell' },
      { value: 'c', label: 'Fangorn' },
      { value: 'd', label: 'Lindon' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 6,
    question: 'Jaki przydomek posiadał Elrond?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Półelf' },
      { value: 'b', label: 'Wiedzący' },
      { value: 'c', label: 'Widzący' },
      { value: 'd', label: 'Wszechwidzący' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 7,
    question: 'Stolicą jakiego regionu było Edoras?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Gondoru' },
      { value: 'b', label: 'Arnoru' },
      { value: 'c', label: 'Rohanu' },
      { value: 'd', label: 'Umbaru' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 8,
    question: 'Jak się nazywa rzeka przepływająca przez Lorien?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Anduina' },
      { value: 'b', label: 'Brandywina' },
      { value: 'c', label: 'Bruinen' },
      { value: 'd', label: 'Celebrant' },
    ],
    correctAnswer: 'd',
  },
  {
    id: 9,
    question: 'Jakie jest prawdziwe imię Golluma?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Deagol' },
      { value: 'b', label: 'Smeagol' },
      { value: 'c', label: 'Geagol' },
      { value: 'd', label: 'Leagol' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 10,
    question: 'Jakie istoty zdaniem Drzewca zostały stworzone, by zakpić z Entów?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Trolle' },
      { value: 'b', label: 'Orkowie' },
      { value: 'c', label: 'Ludzie' },
      { value: 'd', label: 'Huornowie' },
    ],
    correctAnswer: 'd',
  },
  {
    id: 11,
    question:
      'Która z poniższych istot NIE występuje w trylogii „Władcy Pierścieni" i posiada ważną rolę w „Hobbicie"?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Gothmog' },
      { value: 'b', label: 'Drzewiec' },
      { value: 'c', label: 'Sheloba' },
      { value: 'd', label: 'Smaug' },
    ],
    correctAnswer: 'd',
  },
  {
    id: 12,
    question: 'Jakie miano nosił najpotężniejszy spośród Balarogów, ich przywódca?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Zguba Durina' },
      { value: 'b', label: 'Gothmog' },
      { value: 'c', label: 'Ancalagon' },
      { value: 'd', label: 'Glaurung' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 13,
    question: 'Jaki czarodziej zamieszkiwał Orthanc?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Radagast Brązowy' },
      { value: 'b', label: 'Saruman Biały' },
      { value: 'c', label: 'Gandalf Biały' },
      { value: 'd', label: 'Gandalf Szary' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 14,
    question: 'Ziele fajkowe, które palili Merry z Pippinem w Isengardzie, pochodziło z Shire.',
    type: 'radio',
    options: [
      { value: 'a', label: 'Prawda' },
      { value: 'b', label: 'Fałsz' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 15,
    question: 'Ile było pierścieni władzy?',
    type: 'radio',
    options: [
      { value: 'a', label: '9' },
      { value: 'b', label: '1' },
      { value: 'c', label: '20' },
      { value: 'd', label: '4' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 16,
    question: 'Największy spośród orłów i ich władca w Trzeciej Erze to:',
    type: 'radio',
    options: [
      { value: 'a', label: 'Mustavial' },
      { value: 'b', label: 'Landroval' },
      { value: 'c', label: 'Hovasthir' },
      { value: 'd', label: 'Gwaihir' },
    ],
    correctAnswer: 'd',
  },
  {
    id: 17,
    question: 'Jak się nazywa pierwszy elf, którego spotkał w życiu Sam?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Gildor' },
      { value: 'b', label: 'Legolas' },
      { value: 'c', label: 'Haldir' },
      { value: 'd', label: 'Arwena' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 18,
    question: 'Partnerką Toma Bombadila jest:',
    type: 'radio',
    options: [
      { value: 'a', label: 'Galadriel' },
      { value: 'b', label: 'Rzeczna Pani' },
      { value: 'c', label: 'Złota Jagódka' },
      { value: 'd', label: 'Luthien' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 19,
    question:
      'Ile Upiorów Pierścienia było na Wichrowym Czubie, gdy Frodo został ugodzony ostrzem z Morgulu?',
    type: 'radio',
    options: [
      { value: 'a', label: '4' },
      { value: 'b', label: '5' },
      { value: 'c', label: '6' },
      { value: 'd', label: '9' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 20,
    question: 'Kto rządzi Dale w trakcie wydarzeń z „Władcy Pierścieni"?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Brand' },
      { value: 'b', label: 'Bain' },
      { value: 'c', label: 'Bard' },
      { value: 'd', label: 'Bob' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 21,
    question: 'Jakie imię nosiła mądra kobieta z Gondoru w domu leczniczym?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Freda' },
      { value: 'b', label: 'Rosemary' },
      { value: 'c', label: 'Ioreth' },
      { value: 'd', label: 'Eowyna' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 22,
    question: 'Jaki dowódca ruszył wraz z Gandalfem na ratunek obrońców Helmowego Jaru?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Erkenbrand' },
      { value: 'b', label: 'Theodred' },
      { value: 'c', label: 'Eomer' },
      { value: 'd', label: 'Faramir' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 23,
    question:
      'Historia „Władcy Pierścieni" zaczyna się od przygotowań do urodzin Bilba i Froda. Ile lat wtedy kończyli?',
    type: 'radio',
    options: [
      { value: 'a', label: '130 (Bilbo) & 50 (Frodo)' },
      { value: 'b', label: '110 (Bilbo) & 30 (Frodo)' },
      { value: 'c', label: '111 (Bilbo) & 33 (Frodo)' },
      { value: 'd', label: '115 (Bilbo) & 32 (Frodo)' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 24,
    question: 'Ile lat minęło od Przyjęcia, gdy Gandalf opowiedział Frodo o pierścieniu?',
    type: 'radio',
    options: [
      { value: 'a', label: '2 lata' },
      { value: 'b', label: '17 lat' },
      { value: 'c', label: '5 lat' },
      { value: 'd', label: '11 lat' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 25,
    question: 'Wrota Argonath, zwane Filarami Królów – co trzymają obie postacie?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Miecze' },
      { value: 'b', label: 'Kostury' },
      { value: 'c', label: 'Tarcze' },
      { value: 'd', label: 'Topory' },
    ],
    correctAnswer: 'd',
  },
  {
    id: 26,
    question: 'Jak nazywają się szczyty górskie w Masywie Morii?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Zirakzigil, Thangorodrim, Amon Sul' },
      { value: 'b', label: 'Ered Luin, Żelazny Szczyt, Angmar' },
      { value: 'c', label: 'Tol Brandir, Amon Hen, Ephel Duath' },
      { value: 'd', label: 'Caradhras, Celebdil, Fanuidhol' },
    ],
    correctAnswer: 'd',
  },
  {
    id: 27,
    question:
      'Uzupełnij lukę: „The dark fire will not avail you, flame of _____. Go back to the shadow! You cannot pass!"',
    type: 'text',
    correctAnswers: ['udun', 'udûn'],
    placeholder: 'Wpisz brakujące słowo...',
  },
  {
    id: 28,
    question: 'Czyim synem był Aragorn?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Ectheliona' },
      { value: 'b', label: 'Isildura' },
      { value: 'c', label: 'Arathorna' },
      { value: 'd', label: 'Elronda' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 29,
    question: 'Jaki ze smoków w historii Śródziemia był uznawany za największego?',
    type: 'radio',
    options: [
      { value: 'a', label: 'Glaurung' },
      { value: 'b', label: 'Ancalagon Czarny' },
      { value: 'c', label: 'Smaug, Plaga Trzeciej Ery' },
      { value: 'd', label: 'Tiamat, Królowa Smoków' },
    ],
    correctAnswer: 'b',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function checkAnswer(question: QuizQuestion, answer: string): boolean {
  const normalized = answer.trim().toLowerCase();
  if (question.type === 'radio') {
    return normalized === question.correctAnswer;
  }
  return question.correctAnswers.some((ca) => ca.toLowerCase() === normalized);
}

function calculateScore(questions: QuizQuestion[], answers: Record<number, string>): number {
  return questions.reduce((acc, q) => acc + (checkAnswer(q, answers[q.id] ?? '') ? 1 : 0), 0);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AlreadyCompleted({ result }: { result: SavedResult }) {
  const won = result.score >= WINNING_THRESHOLD;
  return (
    <Stack align="center" gap="xl">
      <ThemeIcon variant="filled" color={won ? 'yellow' : 'etherealBlue'} size={80} radius="xl">
        {won ? <IconTrophy size={48} /> : <IconCheck size={48} />}
      </ThemeIcon>

      <Stack align="center" gap="xs">
        <Title order={1} ta="center" c="white">
          Quiz Wiedzy o Śródziemiu
        </Title>
        <Badge size="lg" color="white" variant="filled" c="etherealBlue.8" mt="xs">
          Quiz już rozwiązany
        </Badge>
      </Stack>

      <Paper p={{ base: 'md', md: 'xl' }} w="100%" maw={560} bg="white" shadow="lg">
        <Stack align="center" gap="md">
          <Text size="xl" fw={700} c="etherealBlue.8" ta="center">
            Twój wynik: {result.score} / {result.total}
          </Text>
          <Progress
            value={(result.score / result.total) * 100}
            w="100%"
            color={won ? 'yellow' : 'etherealBlue'}
            size="lg"
            radius="xl"
            styles={{ root: { backgroundColor: 'var(--mantine-color-etherealBlue-1)' } }}
          />
          <Divider w="100%" />
          {won ? (
            <Alert
              icon={<IconStar size={18} />}
              color="yellow"
              variant="outline"
              title="Masz nagrodę!"
              w="100%"
              styles={{ message: { color: 'var(--mantine-color-dark-7)' } }}
            >
              Gratulacje! Osiągnąłeś/aś wynik {result.score}/10 – możesz zgłosić się po nagrodę!
            </Alert>
          ) : (
            <Alert
              color="forestGreen"
              variant="outline"
              title="Dziękujemy za udział!"
              w="100%"
              styles={{ message: { color: 'var(--mantine-color-dark-7)' } }}
            >
              Twój wynik to {result.score}/10. Do zobaczenia na Fornoście!
            </Alert>
          )}
        </Stack>
      </Paper>
    </Stack>
  );
}

interface QuizResultProps {
  result: SavedResult;
  questions: QuizQuestion[];
  answers: Record<number, string>;
}

/** Returns the display label for a given answer value. */
function getAnswerLabel(question: QuizQuestion, value: string): string {
  if (!value) {
    return '(brak odpowiedzi)';
  }
  if (question.type === 'radio') {
    return question.options.find((opt) => opt.value === value)?.label ?? value;
  }
  return value;
}

/** Returns the correct answer as a human-readable string. */
function getCorrectLabel(question: QuizQuestion): string {
  if (question.type === 'radio') {
    return (
      question.options.find((opt) => opt.value === question.correctAnswer)?.label ??
      question.correctAnswer
    );
  }
  return question.correctAnswers.join(' / ');
}

function QuizResult({ result, questions, answers }: QuizResultProps) {
  const { score, total } = result;
  const won = score >= WINNING_THRESHOLD;
  const pct = Math.round((score / total) * 100);

  const incorrectItems = questions
    .map((question, index) => ({ question, index, userAnswer: answers[question.id] ?? '' }))
    .filter(({ question, userAnswer }) => !checkAnswer(question, userAnswer));

  return (
    <Stack align="center" gap="xl">
      <Title order={2} ta="center" c="white">
        {won ? 'Gratulacje!' : 'Dziękujemy za udział!'}
      </Title>

      <Paper p={{ base: 'md', md: 'xl' }} w="100%" maw={560} bg="white" shadow="lg">
        <Stack gap="md">
          <img
            src={won ? happyImage : angryImage}
            alt=""
            style={{
              width: '100%',
              borderRadius: 'var(--mantine-radius-md)',
              objectFit: 'cover',
              maxHeight: 220,
            }}
          />
          <Text size="2rem" fw={700} ta="center" c="etherealBlue.8">
            {score} / {total}
          </Text>
          <Progress
            value={pct}
            color={won ? 'yellow' : 'etherealBlue'}
            size="lg"
            radius="xl"
            styles={{ root: { backgroundColor: 'var(--mantine-color-etherealBlue-1)' } }}
          />
          <Text ta="center" c="dark.5" size="sm">
            {pct}% poprawnych odpowiedzi
          </Text>
          <Divider />
          {won ? (
            <Alert
              icon={<IconStar size={18} />}
              color="yellow"
              variant="outline"
              title="Możesz zgłosić się po nagrodę!"
              styles={{ message: { color: 'var(--mantine-color-dark-7)' } }}
            >
              Wynik {score}/10 kwalifikuje Cię do nagrody! Zgłoś się po nią na strefie Fornost w
              pawilonie 3.
            </Alert>
          ) : (
            <Alert
              color="forestGreen"
              variant="outline"
              title="Dziękujemy za rozwiązanie quizu!"
              styles={{ message: { color: 'var(--mantine-color-dark-7)' } }}
            >
              Twój wynik to {score}/10. Nieźle – każdy hobbit zaczyna od małych kroków przez
              Śródziemie!
            </Alert>
          )}

          {!won && incorrectItems.length > 0 && (
            <>
              <Divider label="Błędne odpowiedzi" labelPosition="center" />
              <Stack gap="xs">
                {incorrectItems.map(({ question, index, userAnswer }) => (
                  <Box
                    key={question.id}
                    p="sm"
                    style={{
                      border: '1px solid var(--mantine-color-red-3)',
                      borderRadius: 'var(--mantine-radius-sm)',
                      backgroundColor: 'var(--mantine-color-red-0)',
                    }}
                  >
                    <Text size="sm" fw={600} c="dark.7" mb={4}>
                      {index + 1}. {question.question}
                    </Text>
                    <Text size="xs" c="red.7">
                      ✗ Twoja odpowiedź: {getAnswerLabel(question, userAnswer)}
                    </Text>
                    <Text size="xs" c="forestGreen.8">
                      ✓ Poprawna: {getCorrectLabel(question)}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </>
          )}
        </Stack>
      </Paper>
    </Stack>
  );
}

function QuizForm({
  questions,
  onSubmit,
}: {
  questions: QuizQuestion[];
  onSubmit: (answers: Record<number, string>) => void;
}) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [errors, setErrors] = useState<Set<number>>(new Set());

  const answeredCount = questions.filter((q) => answers[q.id]?.trim()).length;

  const setAnswer = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const handleSubmit = () => {
    const unanswered = new Set(questions.filter((q) => !answers[q.id]?.trim()).map((q) => q.id));

    if (unanswered.size > 0) {
      setErrors(unanswered);
      const firstId = [...unanswered][0];
      document
        .getElementById(`question-${firstId}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    onSubmit(answers);
  };

  return (
    <Stack gap="lg">
      {/* Header */}
      <Stack align="center" gap="sm">
        <Title order={1} ta="center" c="white">
          Quiz Wiedzy o Śródziemiu
        </Title>
        <Text size="md" c="white" ta="center" maw={480} opacity={0.9}>
          Odpowiedz na {QUIZ_SIZE} pytań i sprawdź swoją znajomość świata Tolkiena!
        </Text>
        <Progress
          value={(answeredCount / QUIZ_SIZE) * 100}
          w="100%"
          maw={400}
          color="etherealBlue.3"
          size="md"
          radius="xl"
          mt="xs"
          bg="rgba(255,255,255,0.2)"
        />
        <Text size="sm" c="white" opacity={0.75}>
          {answeredCount} / {QUIZ_SIZE} odpowiedzi
        </Text>
      </Stack>

      {/* Questions */}
      {questions.map((question, index) => {
        const hasError = errors.has(question.id);
        return (
          <Paper
            key={question.id}
            id={`question-${question.id}`}
            p={{ base: 'md', md: 'lg' }}
            bg="white"
            shadow="md"
            style={
              hasError ? { borderColor: 'var(--mantine-color-red-5)', borderWidth: 2 } : undefined
            }
          >
            <Stack gap="md">
              <Group gap="sm" align="flex-start" wrap="nowrap">
                <Badge
                  size="lg"
                  radius="sm"
                  color="etherealBlue"
                  variant="filled"
                  style={{ flexShrink: 0, marginTop: 2 }}
                >
                  {index + 1}
                </Badge>
                <Text fw={600} c="dark.8" lh={1.5} size="md">
                  {question.question}
                </Text>
              </Group>

              {question.type === 'radio' ? (
                <Radio.Group
                  value={answers[question.id] ?? ''}
                  onChange={(v) => setAnswer(question.id, v)}
                  error={hasError ? 'Wybierz odpowiedź' : undefined}
                >
                  <Stack gap="xs" pl="sm">
                    {question.options.map((opt) => (
                      <Radio
                        key={opt.value}
                        value={opt.value}
                        label={opt.label}
                        styles={{
                          label: { color: 'var(--mantine-color-dark-7)', fontWeight: 500 },
                        }}
                      />
                    ))}
                  </Stack>
                </Radio.Group>
              ) : (
                <TextInput
                  placeholder={question.placeholder ?? 'Wpisz odpowiedź...'}
                  value={answers[question.id] ?? ''}
                  onChange={(e) => setAnswer(question.id, e.currentTarget.value)}
                  error={hasError ? 'Wpisz odpowiedź' : undefined}
                  ml="sm"
                />
              )}
            </Stack>
          </Paper>
        );
      })}

      <Button size="lg" color="etherealBlue" w="100%" maw={400} mx="auto" onClick={handleSubmit}>
        Sprawdź wynik
      </Button>
    </Stack>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function QuizPage() {
  const [savedResult, setSavedResult] = useLocalStorage<SavedResult | null>({
    key: QUIZ_STORAGE_KEY,
    defaultValue: null,
  });
  const [sessionResult, setSessionResult] = useState<SavedResult | null>(null);
  const [sessionAnswers, setSessionAnswers] = useState<Record<number, string>>({});

  // Stable random selection for this session
  const questions = useMemo(
    () => [...QUESTION_BANK].sort(() => Math.random() - 0.5).slice(0, QUIZ_SIZE),
    []
  );

  const handleSubmit = (answers: Record<number, string>) => {
    const score = calculateScore(questions, answers);
    const result: SavedResult = { completed: true, score, total: QUIZ_SIZE };
    setSavedResult(result);
    setSessionResult(result);
    setSessionAnswers(answers);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const content = () => {
    if (savedResult && !sessionResult) {
      return <AlreadyCompleted result={savedResult} />;
    }
    if (sessionResult) {
      return <QuizResult result={sessionResult} questions={questions} answers={sessionAnswers} />;
    }
    return <QuizForm questions={questions} onSubmit={handleSubmit} />;
  };

  return (
    <Box component="section" py={{ base: 60, md: 100 }}>
      <Container size="sm">{content()}</Container>
    </Box>
  );
}
