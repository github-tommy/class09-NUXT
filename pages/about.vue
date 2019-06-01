 <template lang="html">
 
 <div class="">
   <h1>About</h1>
   <h1>{{test}}</h1>
   <button v-on:click="greet">Greet</button>
<!-- homepage -->
<!-- <nuxt-link to='/'>home</nuxt-link> -->
 </div>
</template>

<script>
import axios from 'axios'

export default {
 data() {
   return {
     day: new Date().getDate(),
     // gets month, add one because months start at 0
     month: new Date().getMonth() + 1,
   }
 },
 created: function() {
   this.test = "Hello Again one More time*";
   axios.get(`https://newsapi.org/v2/everything?q=mortgage&from=2019-0${this.month}-${this.day-7}&to=2019-0${this.month}-${this.day}&sortBy=relevancy&pageSize=100&apiKey=2b11e9d152424d8e8c4c3f0310e953a5`)
   .then(response => {
     // JSON responses are automatically parsed.
     this.posts = response.data
     console.log(this.posts);
   })
   .catch(e => {
     this.errors.push(e)
   })
   .finally(() => this.loading =true)
 },
 methods: {
   greet: function() {
     this.test = "Hello Again";
   }
 }
}
</script>

<style lang="css" scoped>
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
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>