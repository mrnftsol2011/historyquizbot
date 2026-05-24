const TOTAL_QUESTIONS = 10;

const questionsData = [
  {
    answer: "Рюрик",
    years: "ум. 879",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/1000_Rurik.JPG/960px-1000_Rurik.JPG?width=300",
    facts: "Основатель династии, призванный на княжение в Новгород согласно летописи. Его фигура считается началом формирования древнерусской государственности. Происхождение связывают со скандинавскими правителями, хотя точных исторических доказательств мало. Его правление стало символической отправной точкой истории Руси."
  },
  {
    answer: "Вещий Олег",
    years: "ум. 912",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oleg_shield_Tsargrad_by_Bruni_%28cropped%29.jpg?width=300",
    facts: "Объединил Киев и Новгород, создав основу Древнерусского государства. Совершил успешный поход на Константинополь, после чего его власть значительно усилилась. С его именем связана легенда о прибитом щите на вратах Царьграда. Его смерть описана в летописях как предсказанная и мистическая."
  },
  {
    answer: "Княгиня Ольга",
    years: "ок. 890–969",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Olga_of_Kiev.jpg?width=300",
    facts: "Первая женщина-правительница на Руси, осуществившая масштабные реформы управления. После гибели мужа провела жестокую и продуманную месть древлянам. Ввела систему налогового сбора и административного контроля. Позже приняла христианство и стала одной из первых христианских правителей Руси."
  },
  {
    answer: "Владимир Святославич",
    years: "ок. 958–1015",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/1000_Vladimir_2.jpg/960px-1000_Vladimir_2.jpg?width=300",
    facts: "Князь, при котором произошло Крещение Руси в 988 году. До этого периода вел активную военную и политическую деятельность. После принятия христианства изменил государственную и религиозную систему страны. Его правление стало переломным моментом в истории восточных славян."
  },
  {
    answer: "Ярослав Мудрый",
    years: "ок. 978–1054",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yaroslav_the_Wise.jpg?width=300",
    facts: "При его правлении Русь достигла высокого уровня развития государства и права. Был создан первый свод законов, регулирующий общественные отношения. Активно развивались культура, образование и строительство. Династические браки его семьи укрепили международные связи Руси."
  },
  {
    answer: "Владимир Мономах",
    years: "1053–1125",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Vladimir_monomakh.jpg/960px-Vladimir_monomakh.jpg?width=300",
    facts: "Князь, известный борьбой за объединение русских земель и защиту от половцев. Обладал сильным авторитетом среди князей своего времени. Написал наставление, отражающее его взгляды на власть и мораль. Его правление стало попыткой укрепления единства Руси."
  },
  {
    answer: "Александр Невский",
    years: "1221–1263",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alexander_Nevsky.jpg?width=300",
    facts: "Прославился военными победами над западными захватчиками. Проводил дипломатическую политику в отношениях с восточными соседями. Считается защитником Руси в период внешних угроз. Позже был канонизирован церковью."
  },
  {
    answer: "Дмитрий Донской",
    years: "1350–1389",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Dmitri_Donskoy.jpg?width=300",
    facts: "Под его руководством была одержана важная победа в крупном сражении против Орды. Усилил роль Москвы как политического центра. Его правление стало шагом к освобождению от ордынского влияния. Поддерживал укрепление княжеской власти."
  },
  {
    answer: "Иван III",
    years: "1440–1505",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ivan_III_of_Russia.jpg?width=300",
    facts: "Завершил процесс освобождения от ордынской зависимости. Создал основы централизованного государства. Ввел символ двуглавого орла как знак власти. Значительно расширил территорию государства."
  },
  {
    answer: "Иван IV",
    years: "1530–1584",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ivan_IV_of_Russia.jpg?width=300",
    facts: "Первый русский царь, укрепивший центральную власть. Провел территориальные расширения государства. Создал опричнину как инструмент внутренней политики. Его правление сопровождалось как реформами, так и жесткими репрессиями."
  },
  {
    answer: "Борис Годунов",
    years: "ок. 1552–1605",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Boris_Godunov.jpg?width=300",
    facts: "Стал первым выборным правителем России. Его правление сопровождалось тяжелыми социальными кризисами и голодом. Усилилась нестабильность государства. Его смерть стала началом Смутного времени."
  },
  {
    answer: "Минин и Пожарский",
    years: "1612",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Monument_to_Minin_and_Pozharsky.jpg?width=300",
    facts: "Организовали народное ополчение, сыгравшее ключевую роль в освобождении Москвы. Представляли разные социальные слои общества. Их действия способствовали восстановлению государственной власти. Стали символами народного единства."
  },
  {
    answer: "Пётр I",
    years: "1672–1725",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Peter_I_of_Russia.jpg?width=300",
    facts: "Провел масштабные реформы государственного устройства. Основал новую столицу на Балтийском побережье. Создал регулярную армию и флот. Его реформы модернизировали страну по европейскому образцу."
  },
  {
    answer: "Михаил Ломоносов",
    years: "1711–1765",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mikhail_Lomonosov.jpg?width=300",
    facts: "Выдающийся ученый-энциклопедист, внесший вклад в разные области науки. Стал основателем первого университета в стране. Начал путь с самообразования и упорного труда. Его работы повлияли на развитие науки и образования."
  },
  {
    answer: "Екатерина II",
    years: "1729–1796",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Catherine_II_of_Russia.jpg?width=300",
    facts: "Расширила территорию государства и укрепила власть империи. Поддерживала идеи Просвещения и реформ. Активно развивала культуру и образование. Ее правление стало эпохой политического и культурного подъема."
  },
  {
    answer: "Александр Суворов",
    years: "1730–1800",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Joseph_Kreutzinger_-_Portrait_of_Count_Alexander_Suvorov_-_WGA12281.jpg/960px-Joseph_Kreutzinger_-_Portrait_of_Count_Alexander_Suvorov_-_WGA12281.jpg?width=300",
    facts: "Выдающийся полководец, не проигравший ни одного сражения. Разработал систему военного обучения. Совершил знаменитый переход через Альпы. Его стратегия стала основой военного искусства."
  },
  {
    answer: "Михаил Кутузов",
    years: "1745–1813",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kutuzov_by_Volkov.jpg/960px-Kutuzov_by_Volkov.jpg?width=300",
    facts: "Главнокомандующий русской армией в войне против Наполеона. Принял стратегическое решение оставить столицу ради победы. Имел большой боевой опыт. Считается символом военной мудрости."
  },
  {
    answer: "Александр II",
    years: "1818–1881",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alexander_II_of_Russia.jpg?width=300",
    facts: "Провел масштабные реформы, включая отмену крепостного права. Модернизировал судебную и административную системы. Его правление изменило социальную структуру общества. Погиб в результате террористического акта."
  },
  {
    answer: "Дмитрий Менделеев",
    years: "1834–1907",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dmitri_Mendeleev.jpg?width=300",
    facts: "Создал периодическую систему химических элементов. Внес вклад в развитие химии и физики. Его открытие стало основой современной науки. Также занимался промышленными исследованиями."
  },
  {
    answer: "Пётр Столыпин",
    years: "1862–1911",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Pyotr_Stolypin_LOC_07327.jpg?width=300",
    facts: "Провел аграрные реформы, направленные на модернизацию сельского хозяйства. Стремился укрепить государственную стабильность. Его политика вызвала значительные социальные изменения. Был смертельно ранен в результате покушения."
  },
  {
    answer: "Николай II",
    years: "1868–1918",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Mikola_II_%28cropped%29-2.jpg/960px-Mikola_II_%28cropped%29-2.jpg?width=300",
    facts: "Последний император Российской империи. Его правление завершилось революционными событиями. Отрекся от престола в 1917 году. Погиб вместе с семьей после революции."
  },
  {
    answer: "Владимир Ленин",
    years: "1870–1924",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vladimir_Lenin.jpg?width=300",
    facts: "Руководитель революции, изменившей политическую систему страны. Основатель нового государства. Разработал идеологию государственного устройства. Его деятельность оказала глобальное влияние."
  },
  {
    answer: "Иосиф Сталин",
    years: "1878–1953",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Joseph_Stalin_official_portrait.jpg/960px-Joseph_Stalin_official_portrait.jpg?width=300",
    facts: "Руководил страной в период индустриализации и войны. Укрепил государственную власть. Его политика сопровождалась масштабными изменениями и репрессиями. Оказал значительное влияние на мировую историю."
  },
  {
    answer: "Георгий Жуков",
    years: "1896–1974",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Zhukov-LIFE-1944-1945.jpg?width=300",
    facts: "Маршал, сыгравший ключевую роль в победе во Второй мировой войне. Руководил важнейшими военными операциями. Считается одним из крупнейших полководцев XX века. После войны занимал высокие должности в армии."
  },
  {
    answer: "Юрий Гагарин",
    years: "1934–1968",
    image: "https://www.susu.ru/sites/default/files/styles/wide_news_image/public/field/image/gagarin_107.jpg?itok=s-C8cocT?width=300",
    facts: "Первый человек, совершивший полет в космос. Его миссия стала историческим прорывом человечества. Получил мировую известность после возвращения. Остается символом космической эры."
  }
];

let selectedDifficulty=null;
let lives=5;
let currentQuestions=[];
let currentIndex=0;
let correctAnswers=0;

function play(id){
  document.getElementById(id).currentTime=0;
  document.getElementById(id).play();
}
function playSound(id){
  const audio = document.getElementById(id);
  if(!audio) return;

  audio.currentTime = 0;
  audio.volume = 0.5;

  const playPromise = audio.play();

  if(playPromise !== undefined){
    playPromise.catch(()=>{});
  }
}
function switchScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function shuffle(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function selectDifficulty(level,el){
  selectedDifficulty=level;

  document.querySelectorAll('.difficulty-btn')
    .forEach(b=>b.classList.remove('selected'));

  el.classList.add('selected');
  document.getElementById('start-btn').disabled=false;

  document.getElementById('difficulty-hint').textContent=
    level==='easy'?'ЛЕГКИЙ РЕЖИМ':
    level==='hard'?'СЛОЖНЫЙ РЕЖИМ':'СРЕДНИЙ РЕЖИМ';

  playSound("sound-click");
}

function updateLives(){
  document.getElementById("lives-display").textContent="♥ ".repeat(lives);
}

function startGame(){

  correctAnswers = 0;
  currentIndex = 0;

  const nick =
    document.getElementById("nickname-input").value.trim() || "PLAYER";

  localStorage.setItem("playerNick", nick);

  lives =
    selectedDifficulty === 'easy' ? 5 :
    selectedDifficulty === 'medium' ? 3 : 1;

  // 🔥 ГАРАНТИРУЕМ 10 ВОПРОСОВ
  let pool = [...questionsData];

  while(pool.length < TOTAL_QUESTIONS){
    pool = pool.concat([...questionsData]);
  }

  currentQuestions = shuffle(pool).slice(0, TOTAL_QUESTIONS);

  updateLives();
  switchScreen('game-screen');
  showQuestion();
}

function showQuestion(){
  const q = currentQuestions[currentIndex];

  document.getElementById("question-text").innerHTML =
    `<span>${q.facts}</span>`;

  document.getElementById("current-q").textContent =
    currentIndex + 1;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  // ❗ ВСЕ неправильные
  const wrongAnswers = questionsData
    .filter(x => x.answer !== q.answer)
    .map(x => x.answer);

  // ❗ берём 3 случайных неправильных
  const wrong = shuffle(wrongAnswers).slice(0, 3);

  // ❗ гарантируем правильный ответ
  const answers = shuffle([q.answer, ...wrong]);

  answers.forEach(a => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = a;
    btn.onclick = () => handleAnswer(a, q.answer, btn);
    container.appendChild(btn);
  });

  document.getElementById("info-panel").classList.remove("active");
}

function handleAnswer(selected,correct,btn){

  document.querySelectorAll('.option').forEach(b=>b.disabled=true);

  const q=currentQuestions[currentIndex];

  if(selected===correct){
    btn.classList.add("correct");
    correctAnswers++;
    playSound("sound-correct");
  }else{
    btn.classList.add("wrong");
    lives--;
    updateLives();
    playSound("sound-wrong");

    document.querySelectorAll('.option').forEach(b=>{
      if(b.textContent===correct) b.classList.add("correct");
    });
  }

  document.getElementById("info-name").textContent=q.answer;
  document.getElementById("info-years").textContent=q.years;
  document.getElementById("info-facts").textContent=q.facts;

  document.getElementById("info-image").src=q.image;

  document.getElementById("info-panel").classList.add("active");
}

function nextQuestion(){
  currentIndex++;

  if(currentIndex>=TOTAL_QUESTIONS || lives<=0){
    endGame();
    return;
  }

  showQuestion();
}

function generateLeaderboard(){

  const nick=localStorage.getItem("playerNick")||"PLAYER";

  const fake=[
    {name:"RETRO_GOD",score:7},
    {name:"PIXEL_MASTER",score:6},
    {name:"CRT_PLAYER",score:5},
    {name:"ARCADE_CPU",score:4}
  ];

  const user={
    name:nick,
    score:correctAnswers
  };

  const all=[...fake,user].sort((a,b)=>b.score-a.score);

  const tbody=document.getElementById("leaderboard-body");
  tbody.innerHTML="";

  all.forEach((p,i)=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${i+1}</td><td>${p.name}</td><td>${p.score}</td>`;
    tbody.appendChild(tr);
  });
}

function endGame(){
  switchScreen("result-screen");

  document.getElementById("final-score").textContent =
  `ПРОЙДЕНО: ${correctAnswers} / ${TOTAL_QUESTIONS}`;

  generateLeaderboard();

  playSound("sound-end");
}

function restartGame(){
  selectedDifficulty=null;
  currentIndex=0;
  correctAnswers=0;

  document.querySelectorAll('.difficulty-btn')
    .forEach(b=>b.classList.remove('selected'));

  document.getElementById('start-btn').disabled=true;
  document.getElementById('difficulty-hint').textContent="ВЫБЕРИ РЕЖИМ";

  switchScreen("start-screen");
}