import PageLayout from '../components/PageLayout'

const books = [
  {
    title: 'O Estrangeiro',
    author: 'Albert Camus',
    cover: 'https://covers.openlibrary.org/b/isbn/9788532509628-L.jpg',
    status: 'Lendo agora',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
    status: 'Recomendação',
  },
  {
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    cover: 'https://covers.openlibrary.org/b/isbn/9780375704024-L.jpg',
    status: 'Favorito',
  },
  {
    title: '1984',
    author: 'George Orwell',
    cover: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
  },
  {
    title: 'Crime e Castigo',
    author: 'Fiódor Dostoiévski',
    cover: 'https://covers.openlibrary.org/b/isbn/9780486415871-L.jpg',
  },
  {
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    cover: 'https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg',
  },
  {
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    cover: 'https://covers.openlibrary.org/b/isbn/9780060934347-L.jpg',
  },
  {
    title: 'A Metamorfose',
    author: 'Franz Kafka',
    cover: 'https://covers.openlibrary.org/b/isbn/9780553213690-L.jpg',
  },
  {
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    cover: 'https://covers.openlibrary.org/b/isbn/9780618640157-L.jpg',
  },
]

export default function Livros() {
  return (
    <PageLayout
      title="Meus Livros"
    >
      <div className="books-grid">
        {books.map((book) => (
          <article key={book.title} className="book-card">
            <div className="book-cover-wrapper">
              <img
                className="book-cover"
                src={book.cover}
                alt={`Capa de ${book.title}`}
                loading="lazy"
              />
              <div className="book-cover-shine" />
            </div>
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
          </article>
        ))}
      </div>
    </PageLayout>
  )
}
