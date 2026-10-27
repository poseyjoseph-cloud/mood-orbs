/* Mood Orbs — words that mean nearly the same thing.

   Hand-made from the theme names only (never from the entries themselves), so a search for
   "exhausted" or "worn out" still finds the Burnout mornings even when those exact
   words were never written.

   themes: one list per theme in entries.js (window.TAG_NAMES).
   leans:  words that clearly lean one way on the three scales, so a search for
           "happy" also favours joyful mornings.
             mood: -1 painful  … +1 joyful
             time: -1 looking ahead … +1 looking back
             life: -1 personal … +1 work */
window.LEXICON = {
  themes: {
    burnout: [
      'burnout', 'burned out', 'burnt out', 'burning out', 'tired', 'exhausted', 'exhaustion',
      'worn out', 'worn down', 'drained', 'overworked', 'overwork', 'overworking',
      'long hours', 'long days', 'no energy', 'low energy', 'fatigue', 'fatigued', 'weary',
      'spent', 'running on empty', 'overwhelmed', 'too much', 'sleepy', 'sleepless', 'cant sleep',
      'wiped out', 'wrecked', 'crash', 'crashed', 'frazzled', 'depleted', 'grind', 'stressed',
      'stress', 'pressure', 'running on fumes', 'numb', 'fried', 'beat', 'zonked'
    ],
    loneliness: [
      'loneliness', 'lonely', 'alone', 'isolated', 'isolation', 'by myself', 'no one', 'nobody',
      'left out', 'disconnected', 'solitude', 'unseen', 'invisible', 'distant', 'apart',
      'friendless', 'empty', 'cut off', 'on my own', 'missing people', 'no friends', 'withdrawn',
      'forgotten', 'unheard', 'longing for company'
    ],
    fear: [
      'fear', 'afraid', 'scared', 'frightened', 'fright', 'panic', 'panic attack', 'panicked',
      'anxious', 'anxiety', 'worry', 'worried', 'worrying', 'nervous', 'dread', 'dreading',
      'terror', 'terrified', 'uneasy', 'on edge', 'racing heart', 'heart racing', 'shaking',
      'trembling', 'fear of failing', 'failure', 'failing', 'what if', 'insecure', 'threatened',
      'alarm', 'alarmed', 'spooked', 'phobia', 'jittery', 'tense', 'catastrophe'
    ],
    confidence: [
      'confidence', 'confident', 'proud', 'pride', 'self-worth', 'self worth', 'self-esteem',
      'believe in myself', 'capable', 'strong', 'strength', 'brave', 'courage', 'bold',
      'worthy', 'good enough', 'assured', 'trust myself', 'win', 'winning', 'success',
      'successful', 'accomplished', 'achievement', 'breakthrough', 'milestone', 'can do it',
      'self-belief', 'sure of myself', 'empowered', 'certain'
    ],
    balance: [
      'balance', 'balanced', 'rest', 'resting', 'relax', 'relaxed', 'relaxing', 'calm', 'peace',
      'peaceful', 'slow down', 'slowing down', 'slower', 'breathe', 'breathing', 'breath',
      'break', 'day off', 'time off', 'sunday', 'weekend', 'nap', 'unplug', 'unplugged',
      'recharge', 'recharged', 'gentle', 'ease', 'downtime', 'meditation', 'meditate',
      'meditating', 'quiet', 'stillness', 'pause', 'leisure', 'vacation', 'holiday', 'restful',
      'self-care', 'boundaries', 'work-life'
    ],
    focus: [
      'focus', 'focused', 'focusing', 'concentrate', 'concentration', 'priority', 'priorities',
      'prioritize', 'one thing', 'main project', 'distracted', 'distraction', 'distractions',
      'scattered', 'too many projects', 'plan', 'planning', 'direction', 'clarity', 'clear',
      'attention', 'discipline', 'goals', 'goal', 'to-do', 'todo', 'list', 'organized',
      'organize', 'schedule', 'routine', 'deep work', 'flow', 'sharp', 'narrow down', 'choose'
    ],
    writing: [
      'journal', 'journaling', 'journalling', 'diary', 'writing', 'write',
      'wrote', 'morning pages', 'entry', 'entries', 'reflect', 'reflection', 'reflecting',
      'notebook', 'pages', 'words', 'morning writing', 'gratitude journal', 'prompt', 'prompts'
    ],
    joy: [
      'joy', 'joyful', 'happy', 'happiness', 'glad', 'delight', 'delighted', 'wonder',
      'wonderful', 'amazed', 'amazing', 'awe', 'excited', 'excitement', 'fun', 'grateful',
      'gratitude', 'thankful', 'blessed', 'love', 'loved', 'beautiful', 'beauty', 'magic',
      'magical', 'smile', 'smiling', 'laugh', 'laughing', 'bliss', 'cheerful', 'elated',
      'thrilled', 'great day', 'good day', 'playful', 'sparkle', 'marvel', 'enchanted',
      'lighthearted', 'uplifted', 'inspired'
    ],
    family: [
      'family', 'wife', 'husband', 'spouse', 'partner', 'son', 'sons', 'daughter', 'daughters',
      'kids', 'children', 'child', 'mom', 'mother', 'dad', 'father', 'parents', 'brother',
      'sister', 'siblings', 'grandkids', 'grandchildren', 'grandson', 'granddaughter', 'home',
      'household', 'relatives', 'together', 'dinner', 'family time', 'loved ones', 'marriage',
      'baby', 'cousin', 'aunt', 'uncle'
    ],
    money: [
      'money', 'cash', 'income', 'salary', 'pay', 'paid', 'paycheck', 'bills', 'budget', 'debt',
      'savings', 'save', 'saving', 'spend', 'spending', 'expenses', 'cost', 'costs', 'price',
      'afford', 'broke', 'rich', 'wealth', 'finances', 'financial', 'sales', 'revenue', 'profit',
      'investment', 'invest', 'bank', 'loan', 'rent', 'mortgage', 'taxes', 'dollars', 'earn',
      'earning', 'customers', 'pricing'
    ],
    health: [
      'health', 'healthy', 'unhealthy', 'sick', 'ill', 'illness', 'doctor', 'exercise',
      'workout', 'walk', 'walks', 'walking', 'sleep', 'diet', 'eating', 'food', 'weight', 'heart',
      'blood pressure', 'pain', 'body', 'fitness', 'gym', 'run', 'running', 'medication', 'meds',
      'hospital', 'back pain', 'headache', 'stretch', 'stretching', 'hike', 'hiking', 'water',
      'energy', 'rested', 'nutrition'
    ],
    studio: [
      'studio', 'pottery', 'potter', 'potters', 'pot', 'pots', 'clay', 'wheel', 'throwing', 'throw',
      'kiln', 'firing', 'fired', 'glaze', 'glazes', 'glazing', 'mug', 'mugs', 'bowl', 'bowls',
      'vase', 'vases', 'ceramics', 'craft', 'crafts', 'craft fair', 'fair', 'market', 'table',
      'make', 'making', 'maker', 'made', 'build', 'building', 'project', 'projects', 'garage',
      'workshop', 'shop', 'handmade', 'art', 'create', 'creating', 'creative', 'sell', 'selling'
    ],
    friends: [
      'friends', 'friend', 'friendship', 'best friend', 'pal', 'pals', 'buddy', 'buddies',
      'company', 'dinner party', 'hang out', 'hanging out', 'catch up', 'visit', 'visiting',
      'goodbye', 'moving away', 'miss her', 'miss him', 'miss them', 'reunion', 'trip', 'cabin',
      'laughing together', 'old friends', 'neighbors', 'people'
    ],
    nature: [
      'nature', 'outside', 'outdoors', 'season', 'seasons', 'autumn', 'fall', 'summer', 'winter',
      'spring', 'leaves', 'maple', 'trees', 'tree', 'woods', 'forest', 'meadow', 'field', 'lake',
      'river', 'sea', 'ocean', 'beach', 'sky', 'sunrise', 'sunset', 'dawn', 'fog', 'mist', 'rain',
      'weather', 'birds', 'geese', 'garden', 'flowers', 'apples', 'orchard', 'light', 'stars'
    ],
  },

  leans: {
    // joyful
    happy: { mood: 0.8 }, happier: { mood: 0.8 }, happiness: { mood: 0.8 }, joy: { mood: 0.85 },
    joyful: { mood: 0.9 }, glad: { mood: 0.7 }, great: { mood: 0.7 }, wonderful: { mood: 0.85 },
    amazing: { mood: 0.8 }, awesome: { mood: 0.8 }, excited: { mood: 0.75 }, thrilled: { mood: 0.85 },
    grateful: { mood: 0.7 }, thankful: { mood: 0.7 }, blessed: { mood: 0.7 }, proud: { mood: 0.7 },
    hopeful: { mood: 0.6 }, good: { mood: 0.5 }, nice: { mood: 0.5 }, love: { mood: 0.7 },
    delighted: { mood: 0.85 }, cheerful: { mood: 0.75 }, content: { mood: 0.55 },
    peaceful: { mood: 0.55 }, calm: { mood: 0.4 }, relieved: { mood: 0.5 }, fun: { mood: 0.65 },
    bright: { mood: 0.6 }, best: { mood: 0.7 }, beautiful: { mood: 0.7 }, wonder: { mood: 0.7 },
    inspired: { mood: 0.7 }, energized: { mood: 0.65 }, celebrate: { mood: 0.8 },

    // painful
    sad: { mood: -0.75 }, unhappy: { mood: -0.7 }, hurt: { mood: -0.7 }, hard: { mood: -0.5 },
    difficult: { mood: -0.5 }, painful: { mood: -0.85 }, awful: { mood: -0.85 },
    terrible: { mood: -0.85 }, bad: { mood: -0.6 }, down: { mood: -0.55 }, depressed: { mood: -0.85 },
    depression: { mood: -0.85 }, low: { mood: -0.55 }, upset: { mood: -0.65 }, angry: { mood: -0.6 },
    mad: { mood: -0.55 }, frustrated: { mood: -0.55 }, anxious: { mood: -0.65 }, scared: { mood: -0.7 },
    afraid: { mood: -0.7 }, worried: { mood: -0.55 }, lonely: { mood: -0.65 }, tired: { mood: -0.4 },
    exhausted: { mood: -0.55 }, hopeless: { mood: -0.9 }, miserable: { mood: -0.9 },
    cry: { mood: -0.75 }, crying: { mood: -0.75 }, grief: { mood: -0.85 }, lost: { mood: -0.55 },
    stuck: { mood: -0.5 }, panic: { mood: -0.8 }, dark: { mood: -0.6 }, heavy: { mood: -0.55 },
    struggle: { mood: -0.6 }, struggling: { mood: -0.6 }, discouraged: { mood: -0.65 },
    overwhelmed: { mood: -0.6 }, burnout: { mood: -0.6 },

    // work
    work: { life: 0.8 }, job: { life: 0.8 }, business: { life: 0.85 }, career: { life: 0.8 },
    office: { life: 0.75 }, client: { life: 0.8 }, clients: { life: 0.8 }, customers: { life: 0.8 },
    boss: { life: 0.7 }, meeting: { life: 0.7 }, meetings: { life: 0.7 }, deadline: { life: 0.75 },
    product: { life: 0.7 }, launch: { life: 0.7 }, coding: { life: 0.7 }, building: { life: 0.6 },
    studio: { life: 0.6 }, fair: { life: 0.65 }, selling: { life: 0.7 },

    // personal
    personal: { life: -0.8 }, family: { life: -0.85 }, home: { life: -0.7 }, myself: { life: -0.6 },
    inner: { life: -0.75 }, feelings: { life: -0.7 }, friends: { life: -0.7 }, friend: { life: -0.7 },
    wife: { life: -0.85 }, kids: { life: -0.85 }, son: { life: -0.85 }, daughter: { life: -0.85 },
    soul: { life: -0.7 }, spiritual: { life: -0.75 }, faith: { life: -0.7 },

    // looking ahead
    plan: { time: -0.8 }, plans: { time: -0.8 }, planning: { time: -0.8 }, future: { time: -0.9 },
    tomorrow: { time: -0.8 }, next: { time: -0.6 }, goals: { time: -0.75 }, hope: { time: -0.65 },
    hopes: { time: -0.7 }, dream: { time: -0.6 }, dreams: { time: -0.6 }, someday: { time: -0.8 },
    soon: { time: -0.6 }, ahead: { time: -0.85 }, upcoming: { time: -0.8 },

    // looking back
    remember: { time: 0.8 }, remembering: { time: 0.8 }, memories: { time: 0.85 },
    memory: { time: 0.8 }, past: { time: 0.85 }, yesterday: { time: 0.75 }, reflect: { time: 0.7 },
    reflecting: { time: 0.7 }, finished: { time: 0.7 }, regret: { time: 0.75 },
    nostalgia: { time: 0.8 }, 'looking back': { time: 0.85 }, 'looking ahead': { time: -0.85 }
  }
};
