export default function Header(){
    return(
        <>
         <main class="page">
    <header class="topbar" aria-label="Top bar">
      <nav class="topbar__links" aria-label="Quick links">
        <a class="topbar__link" href="#" aria-label="Gmail">Gmail</a>
        <a class="topbar__link" href="#" aria-label="Images">Images</a>
      </nav>
      <div class="topbar__icons" aria-label="Top actions">
        <button class="icon-btn" type="button" aria-label="Google apps">
          <span class="icon icon--grid" aria-hidden="true"></span>
        </button>
        <button class="avatar" type="button" aria-label="Profile">
          <span class="avatar__letter" aria-hidden="true">K</span>
        </button>
      </div>
    </header>
    </main>
        </>
    );
}