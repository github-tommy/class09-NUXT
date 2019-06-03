 <template lang="html">
 <div>
   <h1>Joke App*</h1>
   <button @click="showJoke"></button>
                <h2>Living & Retiring In Washington</h2>
                 <div class="faq">
                <h2 class="text-success">Why Seattle - Washington?</h2>

                <h4 class="expand"><mark>History (Click for more details)</mark></h4>
                <!-- <span class="details">x</span> -->
                <!-- answer -->
                <div class="answer">
                    <p>"Seattle" was named after and in honor of Chief Si'ahl of the local Duwamish and Suquamish tribes, is a seaport city on the west coast of the United States. The city is situated between Puget Sound and Lake Washington, about 100 miles (160 km) south of the Canada–United States border. A major gateway for trade with Asia, Seattle is the fourth-largest port in North America as of 2015. </p>
                    <p>According to U.S. Census data released in 2018, the Seattle metropolitan area’s population stands at 3.87 million, and ranks as the 15th largest in the United States.</p> 
                    <p>Major cities and area include Bellevue, Clyde Hill, Kirkland, Redmond, Issaquah and Sammamish (Eastside); Fremont, Ballard, Wallingford (North Seattle); and West Seattle.</p>
                </div>

                <h4><mark>10 Reasons To Invest In Seattle - Washington</mark></h4>
                <!-- answer -->
                <div class="answer">
                    <dl>
                        <dt>Economically: </dt>
                            <dd>- An emerging global city</dd>
                            <dd>- A vibrant downtown</dd>
                            <dd>- Economically robust and expanding</dd>
                            <dd>- A new emerging tech hub</dd>
                            <dd>- Favorable tax environment</dd>
                            <dd>- A competitively priced globally</dd>
                            <dd>- Pivotal west coast and asia pacific location</dd>
                        <dt>Social & Education: </dt>
                            <dd>- World-leading education</dd>
                            <dd>- Ethically diverse</dd>
                            <dd>- A center for culture entertainment</dd>
                    </dl>
                </div>                
                <h4><mark>Seattle</mark></h4>
                <!-- answer -->
                <div class="answer">
                <p>With an estimated 730,000 residents as of 2018, Seattle is the largest city in both the state of Washington and the Pacific Northwest region of North America. According to U.S. Census data released in 2018, the Seattle metropolitan area’s population stands at 3.87 million, and ranks as the 15th largest in the United States.</p>
                </div>

                <h4><mark>Bellevue</mark>></h4>
                <div class="answer">
                <p>The name "Bellevue" is derived from the French words for "beautiful view". Bellevue is a city in the Eastside region of King County, Washington, United States, across Lake Washington from Seattle. Prior to 2008, downtown Bellevue underwent rapid change, with many high rise projects under construction, and was relatively unaffected by the economic downturn. The downtown area is currently the second largest city center in Washington state with 1,300 businesses, 45,000 employees and 10,200 residents. Based on per capita income, Bellevue is the 6th wealthiest of 522 communities in the state of Washington.</p>
                </div>

                <h4><mark>Bellingham</mark>></h4>
                <div class="answer">
                <p>Bellingham, WA, a vibrant city with a population of 82,654 and 30% over 50; is voted as the 5th best place to retire in the US by CNN Money.</p>      
                </div>

                <h4><mark>About Tommy</mark></h4>
                <div class="answer">
                    <blockquote>
                        <p>"Tommy is your real estate partner you can trust. He has extensive finance & wealth management experience. He provided me with a valuable insights which I truly appreciate."</p>
                        <footer>L Hunter</footer>
                    </blockquote>
                <!-- <p>"Tommy is your real estate partner you can trust. He has extensive finance & wealth management experience. He provided me with a valuable insights which I truly appreciate." L. Hunter</p> -->
                <p>Tommy is a broker/realtor with Coldwell Banker Bain.</p>
                <p>www.tommysurjadi.com </p>
                </div>
            </div>  

 </div>
</template>

<script>
jQuery(document).ready(function() {

// initially hide the answers in the FAQ section

jQuery(".answer").hide();

//handling the FAQ questions click

jQuery(".faq h4").click(function() {

    jQuery(this).next(".answer").slideToggle();
});

jQuery(".faq h4").addClass("faq-questions");

});

import axios from 'axios'

export default {
 data() {
   return {
     joke: ''
   }
 },


//  s
//  created: function() {
//    http://www.omdbapi.com/?apikey=90fcc7de&t=2018
//    this.test = "Hello Again one More time*";
//    axios.get(` https://swapi.co/api/people`)
//    .then(response => {
//      // JSON responses are automatically parsed.
//      this.posts = response.data
//      console.log(this.posts);
//    })
//    .catch(e => {
//      this.errors.push(e)
//    })
//    .finally(() => this.loading =true)
//  },
 methods: {
   async showJoke(){
     let config = {
       headers: {
         'Accept': 'application/json'
       }
}
const joke = await this.$http.get('https://icanhazdadjoke.com', config);
   this.joke = joke.data.joke
   console.log(this.$text)
   }
 }
}

</script>

<style lang="css" scoped>


</style>