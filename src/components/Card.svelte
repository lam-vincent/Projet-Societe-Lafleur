<script lang="ts">
	export let name = '';
</script>

<div class="card">
    <div class="profil-picture">
      <a href="{{github}}"><i class="fas fa-user fa-3x"></i></a>
    </div>
    <div class="icones">
      <i class="fab fa-twitter fa-2x"></i>
      <a href=""><i class="fab fa-github fa-2x"></i></a>
      <i class="fab fa-google-plus-g fa-2x"></i>
      <i class="fas fa-cubes fa-2x"></i>
    </div>
    <div class="stats">
      <div class="left">
        <h4>{{person.upvoted}}</h4>
        <span>Upvoted</span>
        <h4>{{person.showcased}}</h4>
        <span>Showcased</span>
        <h4>{{person.followers}}</h4>
        <span>Followers</span>
      </div>
      <div class="right">
        <h4>{{person.created}}</h4>
        <span>Created</span>
        <h4>{{person.collections}}</h4>
        <span>Collections</span>
        <h4>{{person.following}}</h4>
        <span>Following</span>
      </div>
    </div>
  </div>

<style>
:root {
  --main-bg-color: pink;
  --yellow: #ffd543;
  --blue: #5bb5f8;
  --black: #33454f;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: var(--blue);
  font-family: "Roboto", sans-serif;
  color: var(--black);
  font-size: 1.25rem;
}

.card {
  background-color: var(--yellow);
  width: 30rem;
  height: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
  box-shadow: 2px 8px 13px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
}

.profil-picture {
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.5);
}

.stats {
  width: 30rem;
  margin-top: 0.9rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.icones {
  margin-top: 1.3rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
}

.left,
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h4 {
  margin: 0;
  margin-bottom: 1.2rem;
  margin-top: 1.6rem;
  font-size: 1.6rem;
  font-weight: bold;
}

a {
  color: var(--black);
  text-decoration: none;
}
</style>
