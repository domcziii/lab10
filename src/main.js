import './style.css'

const fetchArticles = async () => {
 try {
 const response = await fetch(
 'https://bhkmazgvcrgqejvvmqmy.supabase.co/rest/v1/articles?select=*', {
 headers: {
 apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa21hemd2Y3JncWVqdnZtcW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM5NjAsImV4cCI6MjA2MzIyOTk2MH0.7PT8Y-oEaOLRjMUz2Vc4IL7Mh1bGNzLqK-2k1lx98Lk',
 Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa21hemd2Y3JncWVqdnZtcW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM5NjAsImV4cCI6MjA2MzIyOTk2MH0.7PT8Y-oEaOLRjMUz2Vc4IL7Mh1bGNzLqK-2k1lx98Lk',
 },
 });
 const data = await response.json();
 console.log(data);
 return data;
 } catch (error) {
 console.error('Fetch error:', error);
 }
};

const displayArticles = (articles) => {
  const container = document.getElementById('articles')
  container.innerHTML = '';

  articles.forEach(({ title, subtitle, author, created_at, content }) => {
    const articleEl = document.createElement('article');
    articleEl.innerHTML = `
      <h2>${title}</h2>
      <h3>${subtitle}</h3>
      <p>Autor:${author}</p>
      <p>Data utworzenia:${new Date(created_at).toLocaleString()}</p>
      <p>${content}</p>
      <hr />
    `;
    container.appendChild(articleEl);
  });
};

const createNewArticle = async (article) => {
 try {
 const response = await fetch('https://bhkmazgvcrgqejvvmqmy.supabase.co/rest/v1/articles',
{
 method: 'POST',
 headers: {
 apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa21hemd2Y3JncWVqdnZtcW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM5NjAsImV4cCI6MjA2MzIyOTk2MH0.7PT8Y-oEaOLRjMUz2Vc4IL7Mh1bGNzLqK-2k1lx98Lk',
 'Content-Type' : 'application/json' ,
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa21hemd2Y3JncWVqdnZtcW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM5NjAsImV4cCI6MjA2MzIyOTk2MH0.7PT8Y-oEaOLRjMUz2Vc4IL7Mh1bGNzLqK-2k1lx98Lk',
 },
 body: JSON.stringify(article),
 });

 if (response.status !== 201) {
 throw new Error(`Status: ${response.status}`);
 }
 } catch (error) {
 console.error('Fetch error:' , error);
 }
};

const form = document.getElementById('articlesForms');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

const newArticle = {
    title: form.title.value.trim(),
    subtitle: form.subtitle.value.trim(),
    author: form.author.value.trim(),
    content: form.content.value.trim(),
    created_at: new Date().toISOString(),
  };

  await createNewArticle(newArticle);

  const articles = await fetchArticles();
  displayArticles(articles);
  form.reset();
});

(async () => {
  const articles = await fetchArticles();
  displayArticles(articles);
})();