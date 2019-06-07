 <template lang="html">
  <div id="app">
  <div class="box">
  <h1>{{message1}}</h1>
  <br/>
  <h2>Input the city you live now</h2>
   <br/>
  <input v-model="message2"/>
   <br/>
  <h2>{{message2}}</h2>
  <br/>
  <h2>Why Washington?</h2>
  <br/>
    <ul>
      <li v-for="reason in reasons">
        {{ reason.name }}
      </li>
    </ul>
    </br>
    <button class="btn btn-primary" v-on:click="pressed">Press Me</button>
    <br/>
    <br/>
    <button class="btn btn-informative"><a v-bind:href="url">Click Me for Joke</a></button>
    
</div>
 </div>
</template>

<script>
import axios from 'axios'

export default {
 data() {
   return {
     message1: '10 Reason to Invest in Seattle WA - by tommys',
     message2: '',
     reasons: [
       {name: 'Economically robust and expanding'},
       {name: 'Pivotal west coast and asia pacific location'},
       {name: 'A new emerging tech hub'},
       {name: 'Economically robust and expanding'},
       {name: 'Favorable tax environment'},
       {name: 'A competitively priced globally'},
       {name: 'Pivotal west coast and asia pacific location'},
       {name: 'World-leading education'},
       {name: 'Ethically diverse'},
       {name: 'A new emerging tech hub'}
     ],
     url: 'https://icanhazdadjoke.com'
   }
   },  //return

 methods: {
   pressed(){
     alert('Thanks for Pressing')
   }
 }
} //default

</script>

<style lang="css" scoped>
.box{
  padding: 30px;

}

* {
  text-align: center;
}
</style>