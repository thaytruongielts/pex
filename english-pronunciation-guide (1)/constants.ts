import type { RuleSection } from './types';

export const PRONUNCIATION_DATA: RuleSection[] = [
  {
    id: 'monophthongs',
    title: 'I. Nguyên Tắc Phát Âm Nguyên Âm Đơn (Monophthongs)',
    description: 'Nguyên âm đơn là những nguyên âm mà âm sắc không thay đổi trong quá trình phát âm.',
    groups: [
      {
        id: 'i-long-short',
        title: '1. Cặp Âm /iː/ (Dài) và /ɪ/ (Ngắn)',
        rules: [
          {
            title: 'Âm /iː/ (Long E)',
            phoneme: '/iː/',
            description: 'Là âm kéo dài, miệng dẹt, căng.',
            spellings: ['-ea-', '-ee-', '-ie-', '-ese'],
            examples: ['meet', 'team', 'speak', 'reason', 'deed', 'feel', 'succeed', 'field', 'piece', 'Chinese', 'key', 'machine', 'police'],
            exceptions: 'Ngoại lệ /e/, /eɪ/: bread, head, threat (→ /e/); steak, vein (→ /eɪ/).',
            gapFillingExercises: [
              { question: "Let's ___ at the cafe tomorrow morning.", answer: "meet" },
              { question: "You need to ___ clearly for everyone to hear you.", answer: "speak" },
              { question: "What is the main ___ for your decision?", answer: "reason" },
              { question: "Our soccer ___ won the final match.", answer: "team" },
              { question: "I ___ so happy about the good news.", answer: "feel" },
              { question: "She found a missing ___ of the puzzle.", answer: "piece" },
              { question: "The ___ unlocked the front door.", answer: "key" },
              { question: "He works hard because he wants to ___.", answer: "succeed" },
              { question: "The corn ___ was vast and green.", answer: "field" },
              { question: "The washing ___ is broken.", answer: "machine" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /iː/ sound?", options: ["sit", "set", "seat"], answer: "seat" },
              { question: "The word 'cheese' has the same vowel sound as:", options: ["chip", "chess", "these"], answer: "these" },
              { question: "Choose the word that does NOT have the /iː/ sound.", options: ["read", "bread", "deed"], answer: "bread" },
              { question: "Which of these words rhymes with 'feet'?", options: ["fit", "fate", "meet"], answer: "meet" },
              { question: "The sound in 'key' is the same as in:", options: ["ski", "sky", "keg"], answer: "ski" },
              { question: "Which word contains a different vowel sound?", options: ["leaf", "deaf", "brief"], answer: "deaf" },
              { question: "Find the word with the /iː/ sound.", options: ["live", "leave", "lift"], answer: "leave" },
              { question: "The 'ea' in 'steak' is pronounced differently from the 'ea' in:", options: ["speak", "great", "break"], answer: "speak" },
              { question: "Which word has a long E sound?", options: ["women", "machine", "many"], answer: "machine" },
              { question: "Complete the pair: 'see' and ___.", options: ["sea", "say", "sew"], answer: "sea" }
            ]
          },
          {
            title: 'Âm /ɪ/ (Short I)',
            phoneme: '/ɪ/',
            description: 'Là âm ngắn, thả lỏng, không căng.',
            spellings: ['-i- + phụ âm', 'Tiền tố: be-, de-, re-', 'Hậu tố: -age, -ly, -y'],
            examples: ['sister', 'image', 'dinner', 'print', 'belong', 'delight', 'return', 'cottage', 'family', 'happy', 'build', 'system'],
            notes: 'Âm /ɪ/ trong tiếng Anh khác với "i" tiếng Việt, nó thả lỏng hơn.',
            gapFillingExercises: [
              { question: "My older ___ is a doctor.", answer: "sister" },
              { question: "What time is ___?", answer: "dinner" },
              { question: "It's a ___ of time before we succeed.", answer: "bit" },
              { question: "Can you ___ me the salt, please?", answer: "give" },
              { question: "He lives in a small ___ in the countryside.", answer: "village" },
              { question: "This computer ___ is very complicated.", answer: "system" },
              { question: "I need to ___ this document for the meeting.", answer: "print" },
              { question: "They want to ___ a new house next year.", answer: "build" },
              { question: "The book is on the ___.", answer: "shelf" },
              { question: "This is a very interesting ___.", answer: "image" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ɪ/ sound?", options: ["fine", "finish", "field"], answer: "finish" },
              { question: "The word 'ship' has the same vowel sound as:", options: ["shape", "sheep", "chip"], answer: "chip" },
              { question: "Choose the word that does NOT have the /ɪ/ sound.", options: ["hike", "hit", "him"], answer: "hike" },
              { question: "Which of these words rhymes with 'pin'?", options: ["pine", "pen", "win"], answer: "win" },
              { question: "The sound in 'myth' is the same as in:", options: ["my", "system", "theme"], answer: "system" },
              { question: "Which word contains a different vowel sound?", options: ["give", "dive", "live (v.)"], answer: "dive" },
              { question: "Find the word with the /ɪ/ sound.", options: ["piece", "price", "pitch"], answer: "pitch" },
              { question: "The 'u' in 'busy' is pronounced like the 'i' in:", options: ["bite", "bit", "boat"], answer: "bit" },
              { question: "Which word has a short I sound?", options: ["police", "pizza", "image"], answer: "image" },
              { question: "The word 'women' is pronounced with the vowel sound from:", options: ["win", "wine", "we"], answer: "win" }
            ]
          },
        ],
      },
      {
        id: 'ae-e',
        title: '2. Cặp Âm /æ/ và /e/ (Ngắn)',
        rules: [
          {
            title: 'Âm /æ/ (Short A)',
            phoneme: '/æ/',
            description: 'Là âm ngắn, miệng mở rộng (gần như há to) và dẹt.',
            spellings: ['-a- + phụ âm'],
            examples: ['man', 'travel', 'planet', 'traffic', 'lamp', 'matter', 'cat'],
            notes: 'Sự khác biệt giữa /æ/ (cat) và /e/ (pet) là một trong những lỗi phổ biến nhất.',
            gapFillingExercises: [
              { question: "A black ___ is sleeping on the sofa.", answer: "cat" },
              { question: "He is a tall ___ with dark hair.", answer: "man" },
              { question: "The ___ was really heavy this morning.", answer: "traffic" },
              { question: "What's the ___? You seem upset.", answer: "matter" },
              { question: "She loves to ___ to new countries.", answer: "travel" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /æ/ sound?", options: ["pen", "pan", "pain"], answer: "pan" },
              { question: "The word 'hat' rhymes with:", options: ["hate", "hot", "cat"], answer: "cat" },
              { question: "Choose the word that does NOT have the /æ/ sound.", options: ["apple", "father", "happy"], answer: "father" },
              { question: "The vowel sound in 'last' is the same as in:", options: ["lost", "list", "lamp"], answer: "lamp" },
              { question: "Which word has a different vowel sound?", options: ["bag", "back", "bake"], answer: "bake" }
            ]
          },
          {
            title: 'Âm /e/ (Short E)',
            phoneme: '/e/',
            description: 'Là âm ngắn, miệng mở vừa phải, lưỡi hạ thấp.',
            spellings: ['-e- + phụ âm'],
            examples: ['test', 'member', 'excellent', 'sentence', 'weather', 'many', 'said', 'friend', 'bury'],
            exceptions: 'Ngoại lệ: are, father (→ /ɑː/); came, name (→ /eɪ/).',
            gapFillingExercises: [
              { question: "He is my best ___.", answer: "friend" },
              { question: "The ___ is very sunny today.", answer: "weather" },
              { question: "We have a big ___ tomorrow morning.", answer: "test" },
              { question: "She ___ she would be late for the meeting.", answer: "said" },
              { question: "Please write a complete ___.", answer: "sentence" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /e/ sound?", options: ["mean", "men", "man"], answer: "men" },
              { question: "The word 'bed' has the same vowel sound as:", options: ["bead", "bad", "said"], answer: "said" },
              { question: "Choose the word that does NOT have the /e/ sound.", options: ["head", "steak", "send"], answer: "steak" },
              { question: "How ___ people are coming to the party?", options: ["many", "main", "mine"], answer: "many" },
              { question: "Which word rhymes with 'ten'?", options: ["tin", "tan", "pen"], answer: "pen" }
            ]
          },
        ],
      },
      {
        id: 'u-long-short',
        title: '3. Cặp Âm /uː/ (Dài) và /ʊ/ (Ngắn)',
        rules: [
          {
            title: 'Âm /uː/ (Long U)',
            phoneme: '/uː/',
            description: 'Là âm kéo dài, môi tròn, nhô ra phía trước.',
            spellings: ['-oo', '-oe', '-ue', '-ew', '-ui'],
            examples: ['shoot', 'choose', 'broom', 'canoe', 'tissue', 'cruise', 'blue', 'group', 'through'],
            exceptions: 'Ngoại lệ: blood, flood (→ /ʌ/).',
            gapFillingExercises: [
              { question: "The sky is clear and ___.", answer: "blue" },
              { question: "Which one do you ___?", answer: "choose" },
              { question: "We went on a Caribbean ___ last summer.", answer: "cruise" },
              { question: "Our research ___ is meeting today.", answer: "group" },
              { question: "Can you pass me a ___?", answer: "tissue" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /uː/ sound?", options: ["good", "food", "foot"], answer: "food" },
              { question: "The word 'shoe' has the same vowel sound as:", options: ["show", "she", "through"], answer: "through" },
              { question: "Choose the word that does NOT have the /uː/ sound.", options: ["moon", "blood", "soon"], answer: "blood" },
              { question: "Which of these words rhymes with 'pool'?", options: ["pull", "pole", "cool"], answer: "cool" },
              { question: "The sound in 'flute' is the same as in:", options: ["put", "fruit", "cut"], answer: "fruit" }
            ]
          },
          {
            title: 'Âm /ʊ/ (Short U)',
            phoneme: '/ʊ/',
            description: 'Là âm ngắn, môi tròn nhưng thả lỏng, không nhô ra.',
            spellings: ['-ould', 'oo + d/k', '-u-', '-o-'],
            examples: ['could', 'should', 'would', 'took', 'hook', 'foot', 'pudding', 'sugar', 'bosom'],
            notes: 'Nhiều từ có -u- được phát âm là /ʌ/ hoặc /ju:/, chứ không phải /ʊ/.',
            gapFillingExercises: [
              { question: "You ___ study harder for the exam.", answer: "should" },
              { question: "I ___ a picture of the sunset.", answer: "took" },
              { question: "Please put some ___ in my coffee.", answer: "sugar" },
              { question: "He put his ___ in his pocket.", answer: "hand" },
              { question: "I read a good ___ last week.", answer: "book" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ʊ/ sound?", options: ["cup", "soup", "put"], answer: "put" },
              { question: "The word 'foot' has the same vowel sound as:", options: ["food", "look", "loud"], answer: "look" },
              { question: "Choose the word that does NOT have the /ʊ/ sound.", options: ["could", "rude", "wood"], answer: "rude" },
              { question: "Which of these words contains the /ʊ/ sound?", options: ["butcher", "butter", "button"], answer: "butcher" },
              { question: "The vowel sound in 'full' is the same as in:", options: ["fuel", "fool", "pull"], answer: "pull" }
            ]
          },
        ],
      },
       {
        id: 'uh-a-long',
        title: '4. Cặp Âm /ʌ/ (Ngắn) và /ɑː/ (Dài)',
        rules: [
          {
            title: 'Âm /ʌ/ (Stressed Schwa)',
            phoneme: '/ʌ/',
            description: 'Là âm ngắn, miệng mở hờ, âm thanh phát ra ở giữa khoang miệng.',
            spellings: ['-u- + phụ âm', '-ou-', '-o-'],
            examples: ['summer', 'fun', 'run', 'lucky', 'unlock', 'umbrella', 'trouble', 'country', 'brother', 'nothing'],
            notes: 'Âm /ʌ/ thường là phiên bản được nhấn trọng âm của âm /ə/ (schwa).',
            gapFillingExercises: [
              { question: "My younger ___ is very tall.", answer: "brother" },
              { question: "We had a lot of ___ at the party.", answer: "fun" },
              { question: "Don't worry, it's ___ serious.", answer: "nothing" },
              { question: "It's raining, you should take an ___.", answer: "umbrella" },
              { question: "I like to go for a ___ in the morning.", answer: "run" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ʌ/ sound?", options: ["put", "cut", "cute"], answer: "cut" },
              { question: "The word 'son' has the same vowel sound as:", options: ["sun", "sin", "soon"], answer: "sun" },
              { question: "Choose the word that does NOT have the /ʌ/ sound.", options: ["cup", "study", "student"], answer: "student" },
              { question: "The vowel sound in 'love' is:", options: ["/ɒ/", "/əʊ/", "/ʌ/"], answer: "/ʌ/" },
              { question: "Which word contains a different vowel sound?", options: ["cousin", "couple", "course"], answer: "course" }
            ]
          },
          {
            title: 'Âm /ɑː/ (Long A)',
            phoneme: '/ɑː/',
            description: 'Là âm kéo dài, miệng mở to, lưỡi hạ thấp.',
            spellings: ['-ar'],
            examples: ['garden', 'target', 'sharp', 'laugh', 'palm', 'aunt', 'half', 'drama', 'calm', 'fast'],
            gapFillingExercises: [
              { question: "We grow vegetables in our ___.", answer: "garden" },
              { question: "Don't run so ___, I can't keep up!", answer: "fast" },
              { question: "Be careful, the knife is very ___.", answer: "sharp" },
              { question: "His jokes always make me ___.", answer: "laugh" },
              { question: "The sea was very ___ after the storm.", answer: "calm" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ɑː/ sound?", options: ["cat", "cart", "cut"], answer: "cart" },
              { question: "The word 'father' has the same vowel sound as:", options: ["fat", "further", "calm"], answer: "calm" },
              { question: "Choose the word that does NOT have the /ɑː/ sound.", options: ["park", "pass", "pack"], answer: "pack" },
              { question: "The 'a' in 'class' is pronounced like the 'a' in:", options: ["clasp", "classic", "clatter"], answer: "clasp" },
              { question: "Which word has a different vowel sound?", options: ["heart", "heard", "hard"], answer: "heard" }
            ]
          },
        ],
      },
      {
        id: 'o-long-short',
        title: '5. Cặp Âm /ɔː/ (Dài) và /ɒ/ (Ngắn)',
        rules: [
          {
            title: 'Âm /ɔː/ (Long O)',
            phoneme: '/ɔː/',
            description: 'Là âm kéo dài, môi tròn vừa, lưỡi hơi nâng.',
            spellings: ['-all', '-au', '-aw', '-or', '-oar'],
            examples: ['install', 'always', 'cause', 'daughter', 'saw', 'fork', 'normal', 'roar', 'board', 'court', 'broad', 'caught'],
            gapFillingExercises: [
              { question: "He is ___ late for class.", answer: "always" },
              { question: "She is the youngest ___ in the family.", answer: "daughter" },
              { question: "We heard a lion ___ at the zoo.", answer: "roar" },
              { question: "The accident was the ___ of the traffic jam.", answer: "cause" },
              { question: "Please use a knife and ___ to eat your steak.", answer: "fork" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ɔː/ sound?", options: ["cot", "cut", "caught"], answer: "caught" },
              { question: "The word 'ball' has the same vowel sound as:", options: ["bell", "call", "pal"], answer: "call" },
              { question: "Choose the word that does NOT have the /ɔː/ sound.", options: ["work", "walk", "warm"], answer: "work" },
              { question: "The vowel sound in 'four' is the same as in:", options: ["for", "fur", "far"], answer: "for" },
              { question: "Which word has a different vowel sound?", options: ["law", "low", "saw"], answer: "low" }
            ]
          },
          {
            title: 'Âm /ɒ/ (Short O)',
            phoneme: '/ɒ/',
            description: 'Là âm ngắn, miệng mở tròn, môi thả lỏng.',
            spellings: ['-o- + phụ âm', '-ock', '-ong'],
            examples: ['job', 'box', 'honest', 'topic', 'bottle', 'knock', 'follow', 'boss', 'promise'],
            notes: 'Trong tiếng Anh-Mỹ, âm /ɒ/ thường được phát âm gần với /ɑː/.',
            gapFillingExercises: [
              { question: "He is looking for a new ___.", answer: "job" },
              { question: "Can you pass me that ___ of water?", answer: "bottle" },
              { question: "She made a ___ to visit him soon.", answer: "promise" },
              { question: "To be ___, I don't really like it.", answer: "honest" },
              { question: "What is the main ___ of discussion?", answer: "topic" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ɒ/ sound?", options: ["note", "not", "nut"], answer: "not" },
              { question: "The word 'clock' has the same vowel sound as:", options: ["cluck", "cloak", "sock"], answer: "sock" },
              { question: "Choose the word that does NOT have the /ɒ/ sound.", options: ["lost", "post", "cost"], answer: "post" },
              { question: "The vowel sound in 'watch' is:", options: ["/æ/", "/ɑː/", "/ɒ/"], answer: "/ɒ/" },
              { question: "Which word has a different vowel sound?", options: ["shop", "shot", "show"], answer: "show" }
            ]
          },
        ],
      },
    ],
  },
  {
    id: 'diphthongs',
    title: 'II. Nguyên Tắc Phát Âm Nguyên Âm Đôi (Diphthongs)',
    description: 'Nguyên âm đôi là sự kết hợp của hai nguyên âm, tạo ra sự trượt âm mượt mà.',
    groups: [
       {
        id: 'diphthongs-all',
        title: 'Các Nguyên Âm Đôi Phổ Biến',
        rules: [
          { 
            title: 'Âm /eɪ/', 
            phoneme: '/eɪ/', 
            description: 'Kết hợp từ /e/ sang /ɪ/.', 
            spellings: ['-ay', '-ey', 'a-e', '-ai-', '-eigh'], 
            examples: ['stay', 'survey', 'face', 'change', 'plain', 'train', 'neighbour', 'weight'],
            gapFillingExercises: [
              { question: "Don't ___ your name on this line.", answer: "write" },
              { question: "The ___ is shining brightly today.", answer: "sun" },
              { question: "I'll ___ you later.", answer: "call" },
              { question: "What a pleasant ___!", answer: "day" },
              { question: "We need to ___ our plans.", answer: "change" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /eɪ/ sound?", options: ["say", "see", "soy"], answer: "say" },
              { question: "The word 'wait' has the same vowel sound as:", options: ["wet", "wit", "weight"], answer: "weight" },
              { question: "Choose the word that does NOT have the /eɪ/ sound.", options: ["rain", "ran", "reign"], answer: "ran" },
              { question: "Which of these words rhymes with 'late'?", options: ["let", "light", "eight"], answer: "eight" },
              { question: "The sound in 'break' is the same as in:", options: ["brick", "brooch", "brake"], answer: "brake" }
            ]
          },
          { 
            title: 'Âm /aɪ/', 
            phoneme: '/aɪ/', 
            description: 'Kết hợp từ /a/ sang /ɪ/.', 
            spellings: ['-y', 'i-e', '-ie', '-ye', '-igh'], 
            examples: ['type', 'reply', 'time', 'nice', 'die', 'good-bye', 'light', 'mind', 'climb'],
            gapFillingExercises: [
              { question: "What ___ is it now?", answer: "time" },
              { question: "Turn on the ___ please, it's dark.", answer: "light" },
              { question: "It was ___ of you to help.", answer: "nice" },
              { question: "I'll try to ___ to your email soon.", answer: "reply" },
              { question: "Never ___ your dreams.", answer: "lose" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /aɪ/ sound?", options: ["bit", "beat", "bite"], answer: "bite" },
              { question: "The word 'my' has the same vowel sound as:", options: ["me", "may", "might"], answer: "might" },
              { question: "Choose the word that does NOT have the /aɪ/ sound.", options: ["friend", "find", "fly"], answer: "friend" },
              { question: "Which of these words rhymes with 'high'?", options: ["hey", "hay", "buy"], answer: "buy" },
              { question: "The sound in 'height' is the same as in:", options: ["hate", "heist", "white"], answer: "white" }
            ]
          },
          { 
            title: 'Âm /ɔɪ/', 
            phoneme: '/ɔɪ/', 
            description: 'Kết hợp từ /ɔ/ sang /ɪ/.', 
            spellings: ['-oi-', '-oy'], 
            examples: ['voice', 'destroy', 'loyal', 'employee'],
            gapFillingExercises: [
              { question: "The little ___ is playing with his toys.", answer: "boy" },
              { question: "She has a beautiful singing ___.", answer: "voice" },
              { question: "It's not nice to ___ other people's things.", answer: "destroy" },
              { question: "He is a very ___ employee.", answer: "loyal" },
              { question: "I made a bad ___ and I regret it.", answer: "choice" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ɔɪ/ sound?", options: ["bow", "boy", "buy"], answer: "boy" },
              { question: "The word 'noise' has the same vowel sound as:", options: ["nose", "nice", "voice"], answer: "voice" },
              { question: "Choose the word that does NOT have the /ɔɪ/ sound.", options: ["boil", "ball", "boy"], answer: "ball" },
              { question: "Which of these words rhymes with 'toy'?", options: ["tie", "joy", "toe"], answer: "joy" },
              { question: "The sound in 'coin' is the same as in:", options: ["cone", "join", "kin"], answer: "join" }
            ]
          },
          { 
            title: 'Âm /aʊ/', 
            phoneme: '/aʊ/', 
            description: 'Kết hợp từ /a/ sang /ʊ/.', 
            spellings: ['-ou-', '-ow-'], 
            examples: ['amount', 'ground', 'power', 'crown', 'allow'],
            gapFillingExercises: [
              { question: "Let's go to my ___ and watch a movie.", answer: "house" },
              { question: "The dog is barking very ___.", answer: "loud" },
              { question: "I found a wallet on the ___.", answer: "ground" },
              { question: "The king wears a golden ___.", answer: "crown" },
              { question: "How many people are in the ___ right now?", answer: "crowd" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /aʊ/ sound?", options: ["know", "now", "new"], answer: "now" },
              { question: "The word 'loud' has the same vowel sound as:", options: ["load", "lowed", "allowed"], answer: "allowed" },
              { question: "Choose the word that does NOT have the /aʊ/ sound.", options: ["about", "bought", "doubt"], answer: "bought" },
              { question: "Which of these words rhymes with 'town'?", options: ["ton", "torn", "down"], answer: "down" },
              { question: "The sound in 'couch' is the same as in:", options: ["coach", "catch", "ouch"], answer: "ouch" }
            ]
          },
          { 
            title: 'Âm /əʊ/', 
            phoneme: '/əʊ/', 
            description: 'Kết hợp từ /ə/ sang /ʊ/.', 
            spellings: ['-o', 'o-e', '-oa-', '-ow', '-old'], 
            examples: ['only', 'photo', 'vote', 'rope', 'throat', 'snow', 'sold', 'host'],
            gapFillingExercises: [
              { question: "Don't ___ the door, it's already open.", answer: "close" },
              { question: "I have a sore ___ and I can't speak.", answer: "throat" },
              { question: "He ___ me a story about his trip.", answer: "told" },
              { question: "I don't ___ where he is.", answer: "know" },
              { question: "She wore a beautiful red ___.", answer: "rose" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /əʊ/ sound?", options: ["so", "sew", "sow"], answer: "so" },
              { question: "The word 'boat' has the same vowel sound as:", options: ["boot", "bought", "both"], answer: "both" },
              { question: "Choose the word that does NOT have the /əʊ/ sound.", options: ["cost", "post", "most"], answer: "cost" },
              { question: "Which of these words rhymes with 'road'?", options: ["rod", "rode", "raid"], answer: "rode" },
              { question: "The sound in 'sew' is the same as in:", options: ["so", "saw", "sue"], answer: "so" }
            ]
          },
        ]
      }
    ]
  },
  {
    id: 'consonants',
    title: 'III. Nguyên Tắc Phát Âm Phụ Âm Đặc Biệt',
    description: 'Một số phụ âm có cách phát âm đặc trưng cần lưu ý.',
    groups: [
      {
        id: 'special-consonants-all',
        title: 'Các Cặp Phụ Âm Vô Thanh & Hữu Thanh',
        rules: [
          { title: 'Âm /ʃ/ (Vô thanh)', phoneme: '/ʃ/', description: 'Giống "s" nặng trong tiếng Việt.', spellings: ['-sh', 'c+ia/ie/io', 't-'], examples: ['ship', 'punish', 'fashion', 'conscious', 'ancient', 'potential', 'ambition', 'machine', 'brochure'],
            gapFillingExercises: [
              { question: "She works in the ___ industry.", answer: "fashion" },
              { question: "He has great ___ to be a leader.", answer: "potential" },
              { question: "We took a ___ to a nearby island.", answer: "ship" },
              { question: "Please make ___ you lock the door.", answer: "sure" },
              { question: "I need to ___ my shoes.", answer: "polish" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ʃ/ sound?", options: ["sip", "ship", "chip"], answer: "ship" },
              { question: "The 'ti' in 'nation' is pronounced like:", options: ["/tɪ/", "/taɪ/", "/ʃ/"], answer: "/ʃ/" },
              { question: "Choose the word that does NOT have the /ʃ/ sound.", options: ["chef", "cheap", "machine"], answer: "cheap" },
              { question: "The word 'sugar' starts with the sound:", options: ["/s/", "/z/", "/ʃ/"], answer: "/ʃ/" },
              { question: "Which word contains the /ʃ/ sound?", options: ["pressure", "pleasure", "measure"], answer: "pressure" }
            ]
          },
          { title: 'Âm /ʒ/ (Hữu thanh)', phoneme: '/ʒ/', description: 'Là phiên bản hữu thanh của /ʃ/.', spellings: ['s/z + u/ia/io'], examples: ['pleasure', 'closure', 'decision', 'treasurer', 'casual', 'prestige', 'regime'],
            gapFillingExercises: [
              { question: "It's a ___ to meet you.", answer: "pleasure" },
              { question: "We need to make a ___ soon.", answer: "decision" },
              { question: "This is just a ___ conversation.", answer: "casual" },
              { question: "I watch ___ for entertainment.", answer: "television" },
              { question: "The ___ of the new policy is unclear.", answer: "vision" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ʒ/ sound?", options: ["fusion", "fission", "vision"], answer: "vision" },
              { question: "The 's' in 'measure' is pronounced as:", options: ["/s/", "/z/", "/ʒ/"], answer: "/ʒ/" },
              { question: "Choose the word that does NOT have the /ʒ/ sound.", options: ["garage", "massage", "message"], answer: "message" },
              { question: "The word 'usually' contains the sound:", options: ["/ʃ/", "/s/", "/ʒ/"], answer: "/ʒ/" },
              { question: "Which word has a different middle consonant sound?", options: ["leisure", "lesion", "ledger"], answer: "ledger" }
            ]
          },
          { title: 'Âm /tʃ/ (Vô thanh)', phoneme: '/tʃ/', description: 'Giống "ch" trong tiếng Việt.', spellings: ['ch-', 't + ur/i'], examples: ['church', 'future', 'kitchen', 'achievement', 'gesture', 'century', 'actual', 'picture'],
            gapFillingExercises: [
              { question: "I'm going to ___ on Sunday.", answer: "church" },
              { question: "What are your plans for the ___?", answer: "future" },
              { question: "My mom is cooking in the ___.", answer: "kitchen" },
              { question: "Winning the award was a great ___.", answer: "achievement" },
              { question: "This ___ was taken last year.", answer: "picture" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /tʃ/ sound?", options: ["ship", "chip", "yip"], answer: "chip" },
              { question: "The 't' in 'nature' is pronounced as:", options: ["/t/", "/d/", "/tʃ/"], answer: "/tʃ/" },
              { question: "Choose the word that does NOT have the /tʃ/ sound.", options: ["machine", "match", "much"], answer: "machine" },
              { question: "The word 'watch' ends with the sound:", options: ["/ʃ/", "/s/", "/tʃ/"], answer: "/tʃ/" },
              { question: "Which word contains the /tʃ/ sound?", options: ["gesture", "gaseous", "gentle"], answer: "gesture" }
            ]
          },
          { title: 'Âm /dʒ/ (Hữu thanh)', phoneme: '/dʒ/', description: 'Là phiên bản hữu thanh của /tʃ/.', spellings: ['j', 'g + e/i/y'], examples: ['judge', 'major', 'general', 'suggest', 'energy', 'language', 'soldier'],
            gapFillingExercises: [
              { question: "The ___ made his final decision.", answer: "judge" },
              { question: "This is a ___ problem.", answer: "major" },
              { question: "I have no ___ for the weekend.", answer: "plans" },
              { question: "She speaks three different ___.", answer: "languages" },
              { question: "He joined the army as a ___.", answer: "soldier" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /dʒ/ sound?", options: ["year", "gear", "jeer"], answer: "jeer" },
              { question: "The 'g' in 'gentle' is pronounced as:", options: ["/g/", "/ʒ/", "/dʒ/"], answer: "/dʒ/" },
              { question: "Choose the word that does NOT have the /dʒ/ sound.", options: ["goal", "gem", "gym"], answer: "goal" },
              { question: "The word 'bridge' ends with the sound:", options: ["/ʒ/", "/dʒ/", "/g/"], answer: "/dʒ/" },
              { question: "Which word contains the /dʒ/ sound?", options: ["region", "religion", "legion"], answer: "religion" }
            ]
          },
          { title: 'Âm /θ/ (Vô thanh)', phoneme: '/θ/', description: 'Đặt lưỡi giữa hai hàm răng, thổi hơi.', spellings: ['th-'], examples: ['think', 'theory', 'thanks', 'everything', 'wealthy', 'tooth'],
            gapFillingExercises: [
              { question: "___ you for your help.", answer: "Thank" },
              { question: "I ___ it's going to rain.", answer: "think" },
              { question: "He is a very ___ man.", answer: "wealthy" },
              { question: "I need to brush my ___.", answer: "teeth" },
              { question: "The number that comes after two is ___.", answer: "three" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /θ/ sound?", options: ["den", "then", "thin"], answer: "thin" },
              { question: "The 'th' in 'math' is pronounced as:", options: ["/ð/", "/t/", "/θ/"], answer: "/θ/" },
              { question: "Choose the word that does NOT have the /θ/ sound.", options: ["smooth", "mouth", "moth"], answer: "smooth" },
              { question: "The word 'three' starts with the sound:", options: ["/t/", "/d/", "/θ/"], answer: "/θ/" },
              { question: "Which word contains the /θ/ sound?", options: ["ether", "either", "easier"], answer: "ether" }
            ]
          },
          { title: 'Âm /ð/ (Hữu thanh)', phoneme: '/ð/', description: 'Tương tự /θ/ nhưng có rung thanh quản.', spellings: ['th-', '-the'], examples: ['this', 'other', 'together', 'further', 'although', 'leather'],
            gapFillingExercises: [
              { question: "___ is my brother.", answer: "This" },
              { question: "My ___ is a doctor.", answer: "mother" },
              { question: "We should work ___ on this project.", answer: "together" },
              { question: "I would rather have tea ___ coffee.", answer: "than" },
              { question: "The birds are flying south for the winter, along with their ___.", answer: "feathers" }
            ],
            multipleChoiceExercises: [
              { question: "Which word has the /ð/ sound?", options: ["thigh", "thy", "tie"], answer: "thy" },
              { question: "The 'th' in 'brother' is pronounced as:", options: ["/θ/", "/d/", "/ð/"], answer: "/ð/" },
              { question: "Choose the word that does NOT have the /ð/ sound.", options: ["that", "path", "those"], answer: "path" },
              { question: "The word 'they' starts with the sound:", options: ["/d/", "/t/", "/ð/"], answer: "/ð/" },
              { question: "Which word contains the /ð/ sound?", options: ["another", "anthem", "author"], answer: "another" }
            ]
          },
        ]
      }
    ]
  },
  {
    id: 'endings',
    title: 'IV. Quy Tắc Phát Âm Đuôi S/ES và ED',
    description: 'Quy tắc bắt buộc để phát âm đúng danh từ số nhiều và động từ chia thì.',
    groups: [
      {
        id: 's-es-endings',
        title: '1. Quy Tắc Phát Âm Đuôi S/ES',
        description: 'Phát âm dựa trên âm cuối cùng của từ gốc.',
        rules: [
          { title: 'Phát âm là /ɪz/', phoneme: '/ɪz/', description: 'Khi từ gốc kết thúc bằng các âm /s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/.', spellings: ['-s', '-z', '-sh', '-zh', '-ch', '-j'], examples: ['dresses', 'chooses', 'fixes', 'manages', 'catches', 'sizes'],
            gapFillingExercises: [
              { question: "She ___ the company's finances.", answer: "manages" },
              { question: "The mechanic ___ cars.", answer: "fixes" },
              { question: "The bus ___ the ball.", answer: "misses" },
              { question: "The teacher ___ the students carefully.", answer: "watches" },
              { question: "She has many beautiful ___.", answer: "dresses" }
            ],
            multipleChoiceExercises: [
              { question: "How is the 'es' in 'classes' pronounced?", options: ["/s/", "/z/", "/ɪz/"], answer: "/ɪz/" },
              { question: "Which word has the /ɪz/ ending sound?", options: ["dogs", "dishes", "desks"], answer: "dishes" },
              { question: "The ending of 'changes' is pronounced:", options: ["/s/", "/z/", "/ɪz/"], answer: "/ɪz/" },
              { question: "Which word does NOT have the /ɪz/ ending?", options: ["loses", "leaves", "faces"], answer: "leaves" },
              { question: "The final sound in 'bridges' is:", options: ["/s/", "/z/", "/ɪz/"], answer: "/ɪz/" }
            ]
          },
          { title: 'Phát âm là /s/', phoneme: '/s/', description: 'Khi từ gốc kết thúc bằng các phụ âm vô thanh /k/, /t/, /p/, /f/, /θ/.', spellings: ['-k', '-t', '-p', '-f', '-th'], examples: ['likes', 'hopes', 'writes', 'coughs', 'myths', 'deposits'],
            gapFillingExercises: [
              { question: "He ___ to play the guitar.", answer: "likes" },
              { question: "She ___ very well.", answer: "writes" },
              { question: "The cat ___ on the roof.", answer: "sleeps" },
              { question: "He always ___ for the best.", answer: "hopes" },
              { question: "The store ___ at 9 PM.", answer: "closes" }
            ],
            multipleChoiceExercises: [
              { question: "How is the 's' in 'books' pronounced?", options: ["/s/", "/z/", "/ɪz/"], answer: "/s/" },
              { question: "Which word has the /s/ ending sound?", options: ["keys", "cabs", "cats"], answer: "cats" },
              { question: "The ending of 'laughs' is pronounced:", options: ["/s/", "/z/", "/ɪz/"], answer: "/s/" },
              { question: "Which word does NOT have the /s/ ending?", options: ["plays", "stops", "hopes"], answer: "plays" },
              { question: "The final sound in 'kicks' is:", options: ["/s/", "/z/", "/ɪz/"], answer: "/s/" }
            ]
          },
          { title: 'Phát âm là /z/', phoneme: '/z/', description: 'Với các âm còn lại (nguyên âm và phụ âm hữu thanh).', spellings: [], examples: ['calls', 'dreams', 'finds', 'stays', 'birds', 'chairs'],
            gapFillingExercises: [
              { question: "She ___ her dog every morning.", answer: "feeds" },
              { question: "He often ___ of flying.", answer: "dreams" },
              { question: "The phone ___ loudly.", answer: "rings" },
              { question: "The little ___ are singing.", answer: "birds" },
              { question: "He ___ in a hotel when he travels.", answer: "stays" }
            ],
            multipleChoiceExercises: [
              { question: "How is the 's' in 'dogs' pronounced?", options: ["/s/", "/z/", "/ɪz/"], answer: "/z/" },
              { question: "Which word has the /z/ ending sound?", options: ["hats", "beds", "lips"], answer: "beds" },
              { question: "The ending of 'plays' is pronounced:", options: ["/s/", "/z/", "/ɪz/"], answer: "/z/" },
              { question: "Which word does NOT have the /z/ ending?", options: ["loves", "laughs", "lives"], answer: "laughs" },
              { question: "The final sound in 'cars' is:", options: ["/s/", "/z/", "/ɪz/"], answer: "/z/" }
            ]
          },
        ]
      },
      {
        id: 'ed-endings',
        title: '2. Quy Tắc Phát Âm Đuôi ED',
        description: 'Phát âm dựa trên âm cuối cùng của động từ gốc.',
        rules: [
          { title: 'Phát âm là /ɪd/', phoneme: '/ɪd/', description: 'Khi động từ gốc kết thúc bằng âm /t/ hoặc /d/.', spellings: ['-t', '-d'], examples: ['wanted', 'needed', 'invented', 'provided', 'shouted', 'guided'],
            gapFillingExercises: [
              { question: "I ___ a new phone for my birthday.", answer: "wanted" },
              { question: "She ___ help with her homework.", answer: "needed" },
              { question: "He ___ at the top of his lungs.", answer: "shouted" },
              { question: "The class ___ into groups.", answer: "divided" },
              { question: "They ___ for the bus for an hour.", answer: "waited" }
            ],
            multipleChoiceExercises: [
              { question: "How is the 'ed' in 'wanted' pronounced?", options: ["/t/", "/d/", "/ɪd/"], answer: "/ɪd/" },
              { question: "Which word has the /ɪd/ ending sound?", options: ["played", "hoped", "landed"], answer: "landed" },
              { question: "The ending of 'needed' is pronounced:", options: ["/t/", "/d/", "/ɪd/"], answer: "/ɪd/" },
              { question: "Which word does NOT have the /ɪd/ ending?", options: ["painted", "cleaned", "counted"], answer: "cleaned" },
              { question: "The final sound in 'ended' is:", options: ["/t/", "/d/", "/ɪd/"], answer: "/ɪd/" }
            ]
          },
          { title: 'Phát âm là /t/', phoneme: '/t/', description: 'Khi động từ gốc kết thúc bằng các phụ âm vô thanh /s/, /ʃ/, /tʃ/, /k/, /p/, /f/, /θ/.', spellings: [], examples: ['cooked', 'watched', 'developed', 'relaxed', 'finished', 'researched'],
            gapFillingExercises: [
              { question: "He ___ a delicious meal for dinner.", answer: "cooked" },
              { question: "We ___ a movie last night.", answer: "watched" },
              { question: "She ___ when she heard the joke.", answer: "laughed" },
              { question: "They ___ for hours on the beach.", answer: "walked" },
              { question: "I ___ my homework an hour ago.", answer: "finished" }
            ],
            multipleChoiceExercises: [
              { question: "How is the 'ed' in 'looked' pronounced?", options: ["/t/", "/d/", "/ɪd/"], answer: "/t/" },
              { question: "Which word has the /t/ ending sound?", options: ["loved", "lived", "laughed"], answer: "laughed" },
              { question: "The ending of 'stopped' is pronounced:", options: ["/t/", "/d/", "/ɪd/"], answer: "/t/" },
              { question: "Which word does NOT have the /t/ ending?", options: ["judged", "pushed", "missed"], answer: "judged" },
              { question: "The final sound in 'asked' is:", options: ["/t/", "/d/", "/ɪd/"], answer: "/t/" }
            ]
          },
          { title: 'Phát âm là /d/', phoneme: '/d/', description: 'Với các âm còn lại (nguyên âm và phụ âm hữu thanh).', spellings: [], examples: ['loved', 'cleaned', 'answered', 'occurred', 'followed', 'seemed'],
            gapFillingExercises: [
              { question: "She ___ him very much.", answer: "loved" },
              { question: "I ___ the entire house yesterday.", answer: "cleaned" },
              { question: "He ___ all the questions correctly.", answer: "answered" },
              { question: "It ___ like it was going to rain.", answer: "seemed" },
              { question: "The cat ___ the mouse.", answer: "chased" }
            ],
            multipleChoiceExercises: [
              { question: "How is the 'ed' in 'played' pronounced?", options: ["/t/", "/d/", "/ɪd/"], answer: "/d/" },
              { question: "Which word has the /d/ ending sound?", options: ["worked", "rained", "washed"], answer: "rained" },
              { question: "The ending of 'called' is pronounced:", options: ["/t/", "/d/", "/ɪd/"], answer: "/d/" },
              { question: "Which word does NOT have the /d/ ending?", options: ["fixed", "filled", "feared"], answer: "fixed" },
              { question: "The final sound in 'lived' is:", options: ["/t/", "/d/", "/ɪd/"], answer: "/d/" }
            ]
          },
        ]
      }
    ]
  },
  {
    id: 'stress',
    title: 'V. Quy Tắc Đánh Trọng Âm (Word Stress)',
    description: 'Trọng âm là độ mạnh và cao của giọng khi phát âm một âm tiết, ảnh hưởng lớn đến khả năng nghe hiểu.',
    groups: [
      {
        id: 'two-syllable',
        title: '1. Quy Tắc Với Từ 2 Âm Tiết',
        rules: [
          { 
            title: 'Trọng âm rơi vào âm tiết thứ hai', 
            description: 'Nếu âm tiết thứ hai chứa nguyên âm dài hoặc nguyên âm đôi.', 
            spellings: [], 
            examples: ['provide', 'prefer', 'begin', 'decide'],
            gapFillingExercises: [
              { question: "We must ___ what to do next.", answer: "decide" },
              { question: "The show will ___ at 8 PM.", answer: "begin" },
              { question: "I ___ coffee to tea.", answer: "prefer" },
              { question: "The hotel will ___ breakfast.", answer: "provide" },
              { question: "Please ___ your name here.", answer: "repeat" }
            ],
            multipleChoiceExercises: [
              { question: "Where is the stress in the word 'agree'?", options: ["First syllable", "Second syllable"], answer: "Second syllable" },
              { question: "Which word has stress on the second syllable?", options: ["offer", "arrive", "listen"], answer: "arrive" },
              { question: "The stress in 'explain' is on the ___ syllable.", options: ["first", "second"], answer: "second" },
              { question: "Which word has a different stress pattern?", options: ["forget", "happen", "destroy"], answer: "happen" },
              { question: "In the word 'compete', the stress is on:", options: ["com-", "-pete"], answer: "-pete" }
            ]
          },
          { 
            title: 'Trọng âm rơi vào âm tiết thứ nhất', 
            description: 'Nếu âm tiết thứ hai chứa nguyên âm ngắn hoặc âm /ə/ (schwa).', 
            spellings: [], 
            examples: ['finish', 'visit', 'doctor', 'service', 'motor'],
            gapFillingExercises: [
              { question: "I need to see a ___ about my cough.", answer: "doctor" },
              { question: "Let's ___ our grandparents this weekend.", answer: "visit" },
              { question: "The customer ___ here is excellent.", answer: "service" },
              { question: "You need to ___ your homework.", answer: "finish" },
              { question: "The ___ of the car is very loud.", answer: "motor" }
            ],
            multipleChoiceExercises: [
              { question: "Where is the stress in the word 'student'?", options: ["First syllable", "Second syllable"], answer: "First syllable" },
              { question: "Which word has stress on the first syllable?", options: ["about", "paper", "return"], answer: "paper" },
              { question: "The stress in 'mother' is on the ___ syllable.", options: ["first", "second"], answer: "first" },
              { question: "Which word has a different stress pattern?", options: ["window", "believe", "never"], answer: "believe" },
              { question: "In the word 'answer', the stress is on:", options: ["an-", "-swer"], answer: "an-" }
            ]
          },
        ]
      },
      {
        id: 'noun-verb-pairs',
        title: '2. Phân Biệt Danh Từ/Tính Từ và Động Từ',
        description: 'Trọng âm giúp phân biệt từ loại. Danh từ/Tính từ thường có trọng âm ở âm tiết đầu, Động từ thường có trọng âm ở âm tiết hai.',
        rules: [
          { 
            title: 'Danh từ (N) & Tính từ (Adj)', 
            description: 'Trọng âm thường rơi vào âm tiết thứ nhất.', 
            spellings: [], 
            examples: ['photo', 'record (N)', 'subject (N)', 'happy'],
            gapFillingExercises: [
              { question: "She is a very ___ person.", answer: "happy" },
              { question: "What is your favorite school ___?", answer: "subject" },
              { question: "Let's take a ___ together.", answer: "photo" },
              { question: "The company keeps a ___ of all its sales.", answer: "record" },
              { question: "This is a perfect ___ for our project.", answer: "object" }
            ],
            multipleChoiceExercises: [
              { question: "As a noun, where is the stress in 'present'?", options: ["First syllable", "Second syllable"], answer: "First syllable" },
              { question: "Which word is a noun with first-syllable stress?", options: ["conduct", "content", "conflict"], answer: "conflict" },
              { question: "To use 'import' as a noun, stress the ___ syllable.", options: ["first", "second"], answer: "first" },
              { question: "Which word, when stressed on the first syllable, is a noun?", options: ["reject", "project", "object"], answer: "project" },
              { question: "The stress pattern of a noun like 'rebel' is:", options: ["RE-bel", "re-BEL"], answer: "RE-bel" }
            ]
          },
          { 
            title: 'Động từ (V)', 
            description: 'Trọng âm thường rơi vào âm tiết thứ hai.', 
            spellings: [], 
            examples: ['record (V)', 'object (V)', 'present (V)', 'today'],
            gapFillingExercises: [
              { question: "I need to ___ this conversation.", answer: "record" },
              { question: "He will ___ his findings to the board.", answer: "present" },
              { question: "I ___ to that statement.", answer: "object" },
              { question: "They will ___ the goods tomorrow.", answer: "import" },
              { question: "Don't ___ me with your problems.", answer: "subject" }
            ],
            multipleChoiceExercises: [
              { question: "As a verb, where is the stress in 'present'?", options: ["First syllable", "Second syllable"], answer: "Second syllable" },
              { question: "Which word is a verb with second-syllable stress?", options: ["conduct", "content", "conflict"], answer: "conduct" },
              { question: "To use 'import' as a verb, stress the ___ syllable.", options: ["first", "second"], answer: "second" },
              { question: "Which word, when stressed on the second syllable, is a verb?", options: ["reject", "project", "object"], answer: "reject" },
              { question: "The stress pattern of a verb like 'rebel' is:", options: ["RE-bel", "re-BEL"], answer: "re-BEL" }
            ]
          },
        ]
      }
    ]
  }
];