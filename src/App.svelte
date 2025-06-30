<script>
  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";
  import Footer from "./components/Footer.svelte";

  let page = $state('home');
</script>

<div class="min-h-screen flex flex-col">
  <Header highlight={page} />
  <Main />
  <Footer />
</div>
