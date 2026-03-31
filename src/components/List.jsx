export default function List(){
    return(
        <>
        <main>
        <section class="center" aria-label="Search section">
      <h1 class="logo" aria-label="Google">
        <span class="logo__g">G</span><span class="logo__o1">o</span><span class="logo__o2">o</span><span class="logo__g2">g</span><span class="logo__l">l</span><span class="logo__e">e</span>
      </h1>

      <form class="search" action="https://www.google.com/search" method="GET" role="search">
        <span class="search__icon" aria-hidden="true"></span>
        <input class="search__input" name="q" type="search" autocomplete="off" spellcheck="false" aria-label="Search" placeholder="Search Google or type a URL" />
        <button class="search__action" type="button" aria-label="Voice search">
          <span class="mic" aria-hidden="true"></span>
        </button>
        <button class="search__action" type="button" aria-label="Search by image">
          <span class="cam" aria-hidden="true"></span>
        </button>
      </form>

      <section class="shortcuts" aria-label="Shortcuts">
        <a class="shortcut" href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <span class="shortcut__icon" aria-hidden="true">▶</span>
          <span class="shortcut__label">YouTube</span>
        </a>
        <a class="shortcut" href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <span class="shortcut__icon" aria-hidden="true">f</span>
          <span class="shortcut__label">Facebook</span>
        </a>
         <a class="shortcut" href="https://www.gmail.com" target="_blank" rel="noreferrer">
          <span class="shortcut__icon" aria-hidden="true">✉</span>
          <span class="shortcut__label">Gmail</span>
        </a>
        <a class="shortcut" href="https://www.google.com/maps" target="_blank" rel="noreferrer">
          <span class="shortcut__icon" aria-hidden="true">⌖</span>
          <span class="shortcut__label">Maps</span>
        </a>
         <a class="shortcut" href="https://drive.google.com" target="_blank" rel="noreferrer">
          <span class="shortcut__icon" aria-hidden="true">△</span>
          <span class="shortcut__label">Drive</span>
        </a>
        </section>
        </section>
        </main>
        </>
    );
}