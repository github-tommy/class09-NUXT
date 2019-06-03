 <template>
  <div>
    <br>
    <h1>Latest News Update:</h1><br>
   <!-- create articles with v-for -->
   <!-- below does NOT work why? -->
    <!-- <div v-for="article in posts" v-bind:key="article"> -->
    <section v-for="article in posts">
      <h2>{{article.title}}</h2>
      <h3 >by {{article.author}}</h3>
      <p>{{article.description}}</p>
      <br>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
 data() {
   return {
     
    //  sets posts as null as it can be filled with an array later
    posts: {},
   }
 },
 created: function() {
  //  this.test = "Hello Again one more and  More time*";

   axios.get(`https://newsapi.org/v2/everything?q=mortgage&from=2019-0${this.month}-${this.day-7}&to=2019-0${this.month}-${this.day}&sortBy=relevancy&pageSize=100&apiKey=2b11e9d152424d8e8c4c3f0310e953a5`)
   
   .then(response => {
   
   // JSON responses are automatically parsed.
     this.posts = response.data.articles

   })
   .catch(e => {
     this.errors.push(e)
   })
   .finally(() => this.loading =true)
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
