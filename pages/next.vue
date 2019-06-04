 <template lang="html">
  <div id="app">
  <div class="box">
  <h1>{{message1}}</h1>
  <br/>
  <h2>{{message2}}</h2>
  <br/>
  <input v-model="message2"/>
  <br/>
  <br/>
  <button><a v-bind:href="url">Click me for Joke</a></button>
  
</div>

 </div>
</template>

<script>


import axios from 'axios'

export default {
 data() {
   return {
     message1: 'hello world from tommy',
     message2: '=> rewrite something on the box below',
     url: 'https://icanhazdadjoke.com'
   }
 }
}

</script>

<style lang="css" scoped>
.box{
  padding: 30px;

}

</style>