<template>
    <header>
      <!-- nav for every page -->
    <nav>
    <ul>
      <!-- include the new page -->
      <li><nuxt-link to='/'>Home</nuxt-link></li>
      <li><nuxt-link to='/about'>News</nuxt-link></li>
      <li><nuxt-link to='/next'>Next</nuxt-link></li>
      <li><nuxt-link to='/gallery'>Gallery</nuxt-link></li>
      <li><nuxt-link to='/contactmeform'>Contact Me</nuxt-link></li>
      <!-- <li><nuxt-link to='/contact'>Contact</nuxt-link></li> -->
    </ul>
    
    <h1 class="title">
      Living and Retiring in WA - by @tommys
    </h1>
    <h2 class="subtitle">
    week09: nuxt - application programming interface
    </h2>
    </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>

header {
    /* background: rgb(0, 219, 146); */
    background: pink;
    display: grid;
    grid-template-columns: repeat(2,auto);
}
.logo, li a {
    padding: 1em 2em;
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color: white;
    font-size: .9em;
}

nav {
    justify-self: center ;
}
ul {
    list-style-type: none;
}
li {
    display: inline;
}
li a {
    padding: 1em 2em;
    display: inline-block;
    background: rgba(0,0,0,0.1);
}

</style>
