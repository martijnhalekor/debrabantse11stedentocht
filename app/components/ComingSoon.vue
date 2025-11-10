<template>
  <div class="coming-soon-page">
    <h1 class="visuallyhidden">De Brabantse 11 Stedentocht.</h1>

    <p lang="en">Coming Soon</p>

    <img src="/beeldmerk-wit.svg" alt="" class="logo" />
  </div>
</template>

<style>
.coming-soon-page {
  display: grid;
  place-items: center;
  gap: 2rem;
  height: 100svh;
  background-image: url('/background.jpg');
  background-color: rgba(0 0 0/ 25%);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center 25%;
  background-repeat: no-repeat;

  p {
    font-size: 2.5rem;
    width: min-content;
    margin-block-start: auto;
  }

  .logo {
    width: 80px;
    align-self: end;
    margin-block-end: 4rem;
  }
}
</style>
