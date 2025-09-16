const products = [
  {
    id: 14,
    name: "Боксерські рукавички GRANT",
    image: "gloves.png",
    description: "Професійні рукавички для тренувань і боїв. Забезпечують максимальний захист і комфорт.",
    price: "6200",
    size: "12",
    category: "gloves"
  },
  {
    id: 16,
    name: "Спортивна сумка VENUM",
    image: "bags.png",
    description: "Містка сумка для боксерського спорядження. Водовідштовхувальний матеріал.",
    price: "850",
    category: "bags"
  },
  {
   id: 22,
    name: "Спортивна сумка LEONE",
    image: "bags2.png",
    description: "Містка сумка для боксерського спорядження. Водовідштовхувальний матеріал.",
    price: "800",
    category: "bags"
  },
  {
   id: 23,
    name: "Спортивна сумка Adidas",
    image: "bags3.png",
    description: "Містка сумка для боксерського спорядження. Водовідштовхувальний матеріал.",
    price: "850",
    category: "bags"
  },
  {
   id: 24,
    name: "Спортивна сумка Everlast",
    image: "bags4.png",
    description: "Містка сумка для боксерського спорядження. Водовідштовхувальний матеріал.",
    price: "1000",
    category: "bags"
  },
  {
   id: 25,
    name: "Спортивна сумка LONSDALE",
    image: "bags5.png",
    description: "Містка сумка для боксерського спорядження. Водовідштовхувальний матеріал.",
    price: "1250",
    category: "bags"
  },
  {
    id: 2,
    name: "Боксерська форма TITLE",
    image: "uniform.png",
    description: "Легка та зручна форма для тренувань і змагань. Доступна в різних розмірах.",
    price: "950",
    category: "clothing"
  },
   {
    id: 26,
    name: "Боксерська форма Adidas",
    image: "clothing2.png",
    description: "Легка та зручна форма для тренувань і змагань. Доступна в різних розмірах.",
    price: "1750",
    category: "clothing"
  },
   {
    id: 27,
    name: "Боксерська форма Everlast",
    image: "clothing3.png",
    description: "Легка та зручна форма для тренувань і змагань. Доступна в різних розмірах.",
    price: "1050",
    category: "clothing"
  },
   {
    id: 28,
    name: "Боксерська форма TITLE",
    image: "clothing4.png",
    description: "Легка та зручна форма для тренувань і змагань. Доступна в різних розмірах.",
    price: "1950",
    category: "clothing"
  },
   {
    id: 29,
    name: "Боксерська форма TITLE",
    image: "clothing5.png",
    description: "Легка та зручна форма для тренувань і змагань. Доступна в різних розмірах.",
    price: "1800",
    category: "clothing"
  },
  {
    id: 3,
    name: "Груша для боксу RDX",
    image: "punching-bag.png",
    description: "Ідеальна для розвитку сили удару та витривалості. Надійне кріплення.",
    price: "11800",
    category: "punching-bags"
  },
   {
    id: 30,
    name: "Груша для боксу SKO",
    image: "punching-bag2.png",
    description: "Ідеальна для розвитку сили удару та витривалості. Надійне кріплення.",
    price: "11600",
    category: "punching-bags"
  },
   {
    id: 31,
    name: "Груша для боксу Vnoks",
    image: "punching-bag3.png",
    description: "Ідеальна для розвитку сили удару та витривалості. Надійне кріплення.",
    price: "7900",
    category: "punching-bags"
  },
   {
    id: 32,
    name: "Груша для боксу Everlast",
    image: "punching-bag4.png",
    description: "Ідеальна для розвитку сили удару та витривалості. Надійне кріплення.",
    price: "7500",
    category: "punching-bags"
  },
   {
    id: 33,
    name: "Груша для боксу BOXER",
    image: "punching-bag5.png",
    description: "Ідеальна для розвитку сили удару та витривалості. Надійне кріплення.",
    price: "8000",
    category: "punching-bags"
  },
  {
    id: 4,
    name: "Шолом для боксу TITLE",
    image: "helmet.png",
    description: "Захищає голову під час спарингів. Регульований розмір.",
    price: "1550",
    category: "head protection"
  },
  {
    id: 34,
    name: "Шолом для боксу TITLE",
    image: "helmet2.png",
    description: "Захищає голову під час спарингів. Регульований розмір.",
    price: "1700",
    category: "head protection"
  },
  {
    id: 35,
    name: "Шолом для боксу RDX",
    image: "helmet5.png",
    description: "Захищає голову під час спарингів. Регульований розмір.",
    price: "1300",
    category: "head protection"
  },
  {
    id: 36,
    name: "Шолом для боксу Reyes",
    image: "helmet3.png",
    description: "Захищає голову під час спарингів. Регульований розмір.",
    price: "2700",
    category: "head protection"
  },
  {
    id: 37,
    name: "Шолом для боксу TWINS",
    image: "helmet4.png",
    description: "Захищає голову під час спарингів. Регульований розмір.",
    price: "1700",
    category: "head protection"
  },
  {
    id: 5,
    name: "Мішок для боксу Vnoks",
    image: "heavy-bag.png",
    description: "Важкий мішок для інтенсивних тренувань. Висока зносостійкість.",
    price: "7100",
    category: "boxing-bags"
  },
    {
    id: 38,
    name: "Мішок для боксу SKO",
    image: "heavy-bag2.png",
    description: "Важкий мішок для інтенсивних тренувань. Висока зносостійкість.",
    price: "9500",
    category: "boxing-bags"
  },
    {
    id: 39,
    name: "Мішок для боксу SKO",
    image: "heavy-bag3.png",
    description: "Важкий мішок для інтенсивних тренувань. Висока зносостійкість.",
    price: "8300",
    category: "boxing-bags"
  },
    {
    id: 40,
    name: "Мішок для боксу RDX",
    image: "heavy-bag4.png",
    description: "Важкий мішок для інтенсивних тренувань. Висока зносостійкість.",
    price: "14400",
    category: "boxing-bags"
  },
    {
    id: 41,
    name: "Мішок для боксу RDX",
    image: "heavy-bag5.png",
    description: "Важкий мішок для інтенсивних тренувань. Висока зносостійкість.",
    price: "12150",
    category: "boxing-bags"
  },
  {
    id: 6,
    name: "Боксерські бинти Everlast",
    image: "wraps.png",
    description: "Еластичні бинти для захисту кистей. Довжина — 4 метри.",
    price: "450",
    category: "boxing bandages"
  },
{
    id: 42,
    name: "Боксерські бинти TITLE",
    image: "wraps2.png",
    description: "Еластичні бинти для захисту кистей. Довжина — 4 метри.",
    price: "850",
    category: "boxing bandages"
  },
  {
    id: 43,
    name: "Боксерські бинти RIVAL",
    image: "wraps3.png",
    description: "Еластичні бинти для захисту кистей. Довжина — 4 метри.",
    price: "850",
    category: "boxing bandages"
  },
  {
    id: 44,
    name: "Боксерські бинти GREEN HILL",
    image: "wraps4.png",
    description: "Еластичні бинти для захисту кистей. Довжина — 4 метри.",
    price: "550",
    category: "boxing bandages"
  },
  {
    id: 45,
    name: "Боксерські бинти LEONE",
    image: "wraps5.png",
    description: "Еластичні бинти для захисту кистей. Довжина — 4 метри.",
    price: "650",
    category: "boxing bandages"
  },
  {
    id: 7,
    name: "Боксерські лапи SKO",
    image: "pads.png",
    description: "Для тренування точності та швидкості ударів. Ергономічна форма.",
    price: "700",
    category: "training"
  },
   {
    id: 46,
    name: "Боксерські лапи TITLE",
    image: "pads2.png",
    description: "Для тренування точності та швидкості ударів. Ергономічна форма.",
    price: "900",
    category: "training"
  },
   {
    id: 47,
    name: "Боксерські лапи SKO",
    image: "pads3.png",
    description: "Для тренування точності та швидкості ударів. Ергономічна форма.",
    price: "600",
    category: "training"
  },
   {
    id: 48,
    name: "Боксерські лапи Hit Bounce",
    image: "pads4.png",
    description: "Для тренування точності та швидкості ударів. Ергономічна форма.",
    price: "670",
    category: "training"
  },
   {
    id: 49,
    name: "Боксерські лапи TITLE",
    image: "pads5.png",
    description: "Для тренування точності та швидкості ударів. Ергономічна форма.",
    price: "9500",
    category: "training"
  },
  {
    id: 8,
    name: "Боксерки Nike",
    image: "shoes.jpg",
    description: "Спеціальне взуття для боксу. Легкі та стійкі.",
    price: "4300",
    category: "footwear"
  },
   {
    id: 50,
    name: "Боксерки Adidas",
    image: "shoes2.png",
    description: "Спеціальне взуття для боксу. Легкі та стійкі.",
    price: "3600",
    category: "footwear"
  },
   {
    id: 51,
    name: "Боксерки Nike",
    image: "shoes3.png",
    description: "Спеціальне взуття для боксу. Легкі та стійкі.",
    price: "13300",
    category: "footwear"
  },
   {
    id: 52,
    name: "Боксерки RIVAL",
    image: "shoes4.png",
    description: "Спеціальне взуття для боксу. Легкі та стійкі.",
    price: "7300",
    category: "footwear"
  },
   {
    id: 53,
    name: "Боксерки VENUM",
    image: "shoes5.png",
    description: "Спеціальне взуття для боксу. Легкі та стійкі.",
    price: "5500",
    category: "footwear"
  },
  {
    id: 9,
    name: "Капа для боксу Adidas",
    image: "mouthguards.png",
    description: "Захист зубів під час бою. Анатомічна форма.",
    price: "600",
    category: "dental protection"
  },
   {
    id: 54,
    name: "Капа для боксу Fairtex",
    image: "mouthguards2.png",
    description: "Захист зубів під час бою. Анатомічна форма.",
    price: "800",
    category: "dental protection"
  },
   {
    id: 55,
    name: "Капа для боксу Adidas",
    image: "mouthguards3.png",
    description: "Захист зубів під час бою. Анатомічна форма.",
    price: "620",
    category: "dental protection"
  },
   {
    id: 56,
    name: "Капа для боксу TITLE",
    image: "mouthguards4.png",
    description: "Захист зубів під час бою. Анатомічна форма.",
    price: "870",
    category: "dental protection"
  },
   {
    id: 57,
    name: "Капа для боксу RDX",
    image: "mouthguards5.png",
    description: "Захист зубів під час бою. Анатомічна форма.",
    price: "600",
    category: "dental protection"
  },
  {
    id: 10,
    name: "Тренажер для боксу",
    image: "trainers4.jpg",
    description: "Для розвитку швидкості та реакції. ",
    price: "2550",
    category: "home training"
  },
   {
    id: 58,
    name: "Файт бол POWERPLAY",
    image: "trainers.png",
    description: "Для розвитку координації та реакції.",
    price: "500",
    category: "home training"
  },
   {
    id: 59,
    name: "Мішень з голосом UChamp",
    image: "trainers3.jpg",
    description: "Комплекс тренажерів для розвитку сили та координації.",
    price: "4000",
    category: "home training"
  },
   {
    id: 60,
    name: " М'яч тенісний Werkon",
    image: "trainers2.png",
    description: "Tренажер для розвитку координації.",
    price: "200",
    category: "home training"
  },
   {
    id: 61,
    name: "Тренажер для боксу Bokexing",
    image: "trainers5.jpg",
    description: "Tренажер для розвитку сили та координації.",
    price: "5700",
    category: "home training"
  },
   {
    id: 15,
    name: "Боксерські рукавички TITLE",
    image: "gloves1.png",
    description: "Професійні рукавички для тренувань і боїв. Забезпечують максимальний захист і комфорт.",
    price: "4300",
    size: "12",
    category: "gloves"
  },
  
    {
    id: 17,
    name: "Боксерські рукавички VENUM",
    image: "gloves2.png",
    description: "Професійні рукавички для тренувань і боїв. Забезпечують максимальний захист і комфорт.",
    price: "3300",
    size: "12",
    category: "gloves"
  },
    {
    id: 18,
    name: "Боксерські рукавички Adidas",
    image: "gloves3.png",
    description: "Професійні рукавички для тренувань і боїв. Забезпечують максимальний захист і комфорт.",
    price: "1800",
    size: "12",
    category: "gloves"
  },
    {
    id: 19,
    name: "Боксерські рукавички Reyes",
    image: "gloves4.png",
    description: "Професійні рукавички для тренувань і боїв. Забезпечують максимальний захист і комфорт.",
    price: "8990",
    size: "12",
    category: "gloves"
  },
    {
    id: 20,
    name: "Боксерські рукавички GREEN HIIL",
    image: "gloves5.png",
    description: "Професійні рукавички для тренувань і боїв. Забезпечують максимальний захист і комфорт.",
    price: "5300",
    size: "12",
    category: "gloves"
  },
    {
    id: 21,
    name: "Боксерські рукавички Everlast",
    image: "gloves6.png",
    description: "Професійні рукавички для тренувань і боїв. Забезпечують максимальний захист і комфорт.",
    price: "2300",
    size: "12",
    category: "gloves"
  },
  {
    id: 11,
    name: "Скакалка Everlast",
    image: "ropes.jpg",
    description: "Для кардіо-тренувань і розігріву. Регульована довжина.",
    price: "420",
    category: "skipping rope"
  },
   {
    id: 11,
    name: "Скакалкa Gym Beam",
    image: "ropes2.jpg",
    description: "Для кардіо-тренувань і розігріву. Регульована довжина.",
    price: "390",
    category: "skipping rope"
  },
   {
    id: 11,
    name: "Скакалкa inSPORTline",
    image: "ropes3.jpg",
    description: "Для кардіо-тренувань і розігріву. Регульована довжина.",
    price: "550",
    category: "skipping rope"
  },
   {
    id: 11,
    name: "Скакалкa KUMM",
    image: "ropes4.jpg",
    description: "Для кардіо-тренувань і розігріву. Регульована довжина.",
    price: "400",
    category: "skipping rope"
  },
   {
    id: 11,
    name: "Скакалкa York",
    image: "ropes5.jpg",
    description: "Для кардіо-тренувань і розігріву. Регульована довжина.",
    price: "600",
    category: "skipping rope"
  }
];

