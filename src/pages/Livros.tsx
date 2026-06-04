import PageLayout from '../components/PageLayout'
import { books } from '../data/books'

export default function Livros() {
  return (
    <PageLayout
      title="meus livros"
      variant="swiss"
      description={
        <>
          uma coleção dos livros que já li ou tenho interesse em ler, reunidos
          num só lugar.
        </>
      }
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
