<template>
  <section class="container">
    <div>
      <!-- <logo /> -->
    <!-- <header>
    <nav>
    <ul>
      <li><nuxt-link to='/about'>About</nuxt-link></li>
      <li><nuxt-link to='/next'>Next</nuxt-link></li>
      <li><nuxt-link to='/gallery'>Gallery</nuxt-link></li>
      <li><nuxt-link to='/contact'>Contact</nuxt-link></li>
    </ul>
          <h1 class="title">
            week 09: nuxt - API
          </h1>
          <h2 class="subtitle">
            application programming interface - Living and Retiring in WA
          </h2>
    </nav>
    </header> -->
    <h2></h2>
    <br><br>
    <p class ="subheading">Why Seattle - Washington? by tommys </p> 
    <p>"Seattle" was named after and in honor of Chief Si'ahl of the local Duwamish and Suquamish tribes, is a seaport city on the west coast of the United States. The city is situated between Puget Sound and Lake Washington, about 100 miles (160 km) south of the Canada–United States border. A major gateway for trade with Asia, Seattle is the fourth-largest port in North America in 2015. According to U.S. Census data released in 2018, the Seattle metropolitan area’s population stands at 3.87 million, and ranks as the 15th largest in the United States. Major cities and area include Bellevue, Clyde Hill, Kirkland, Redmond, Issaquah, Sammamish, Fremont, Ballard and Wallingford. </p>
    <br><br>
    <p class ="subheading">10 Reasons to Invest in Washington</p>
        <ul>
            <li>- An emerging global city</li>
            <li>- A vibrant downtown</li>
            <li>- Economically robust and expanding</li>
            <li>- A new emerging tech hub</li>
            <li>- Favorable tax environment</li>
            <li>- A competitively priced globally</li>
            <li>- Pivotal west coast and asia pacific location</li>
            <li>- World-leading education</li>
            <li>- Ethically diverse</li>
            <li>- A center for culture entertainment</li>
        </ul>  
    <br>                    
    <p class ="subheading">Seattle</p>
    <p>With an estimated 730,000 residents as of 2018, Seattle is the largest city in both the state of Washington and the Pacific Northwest region of North America. According to U.S. Census data released in 2018, the Seattle metropolitan area’s population stands at 3.87 million, and ranks as the 15th largest in the United States.</p>
    <br>
    <p class ="subheading">Bellevue</p>
    <p>The name "Bellevue" is derived from the French words for "beautiful view". Bellevue is a city in the Eastside region of King County, Washington, United States, across Lake Washington from Seattle. Prior to 2008, downtown Bellevue underwent rapid change, with many high rise projects under construction, and was relatively unaffected by the economic downturn. The downtown area is currently the second largest city center in Washington state with 1,300 businesses, 45,000 employees and 10,200 residents. Based on per capita income, Bellevue is the 6th wealthiest of 522 communities in the state of Washington.</p>
    <br>
    <p class ="subheading">Bellingham</p>
    <p>Bellingham, WA, a vibrant city with a population of 82,654 and 30% over 50; is voted as the 5th best place to retire in the US by CNN Money.</p>      
    <br>
    <p class ="subheading">About Tommy</p>
      <blockquote>
        <p>"Tommy is your real estate partner you can trust. He has extensive finance & wealth management experience. He provided me with a valuable insights which I truly appreciate."</p>
        <footer>L Hunter</footer>
      </blockquote>
      <p>"Tommy is your real estate partner you can trust. He has extensive finance & wealth management experience. He provided me with a valuable insights which I truly appreciate." L. Hunter</p>
      <p>Tommy is a broker/realtor with Coldwell Banker Bain.</p>
      <p>www.tommysurjadi.com </p>     
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {

  // animation on starting page
  transition: 'bounced',

  components: {
    Logo
  }
}

</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  /* color: #526488; */
  color: #fff;
  word-spacing: 5px;
  paliing-bottom: 15px;
}

.links {
  paliing-top: 15px;
}

.subheading {
  font-size: 32px;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-weight: 300;
}

p {
  font-size: 1.2em;
  line-height: 1.4em;
}

header {
    background: rgb(0, 219, 146);
    display: grid;
    grid-template-columns: repeat(2,auto);
}
.logo, li a {
    paliing: 1em 2em;
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color: white;
    font-size: .9em;
}

nav {
    justify-self: right;
}
ul {
    list-style-type: none;
}
li {
    display: inline;
}
li a {
    paliing: 1em 2em;
    display: inline-block;
    background: rgba(0,0,0,0.1);
}

/* animation */
.page-enter-active {
  animation: bounce-in .8s;
}
.page-enter-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% { tranform: scale(.9); opacity: 0;}
  100% { transform: scale(1); opacity: 1;}
}
@keyframes bounce-out {
  0% { tranform: scale(1); opacity: 1;}
  100% { transform: scale(.9); opacity: 0;}
}

</style>
