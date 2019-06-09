 <template lang="html">
 <fieldset>
    <legend>Please enter your contact details and area of your interest, criteria and budget:
    </legend>
    <label>
        Name:
        <input type="text" name="name" size="30" maxlength="100">
    </label>
    <br />
    <label>
        Phone:
            <input type="text" name="phone" size="30" maxlength="100">
        </label>
        <br />
    <!-- <p>Subscribe to our email list:</p>
    <input type="text" name="email" />
    <input type="image" src="images.subscribe.jpg" width="100" height="20" /> -->
    <label>
        Email:
        <input type="email" name="email" size="30" maxlength="100">
    </label>
    </br>
    </br>
    <label>Location of interest:
        <select name="region">
        <option value="--" selected >Undecided</option>
        <option value="seattle">Seattle</option>
        <option value="bellevue">Bellevue</option>
        <option value="kirkland">Kirkland</option>
        <option value="redmond">redmond</option>
        <option value="issaquah">Issaquah</option>
        <option value="sammamish">Sammamish</option>
        </select>
    </label>
    </br>  
    </br>
    <label>How soon do you plan to buy or sell?:
        <select name="region">
        <option value="--" selected >Immediate</option>
        <option value="1-3 month">1-3 months</option>
        <option value="4-6 months">4-6 months</option>
        <option value="7-12 months">7-12 months</option>
        </select>
    </label>
    </br>
    <p>
    <label for="comments">
        Comments:
    </label>
    <br />
    <textarea rows="4" cols="40" id="comments">
    </textarea>
    </p>
    <!-- <label>
        <input type="checkbox" name="subscribe" checked="checked" />
        Sign me up for email updates
    </label> -->
    <br />
    <br />
    <input type="submit" value="Submit" />
    <br />
    </fieldset>
</template>

<script>
import axios from 'axios';
export default {
  name: 'search',
  data () {
    return {
      msg: 'Search',
      query: '',
      results: ''
    }
  },
  methods: {
      getResult(query) {
        axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then( response => {
            console.log(response.data.collection.items);
            this.results = response.data.collection.items;
        });
      }
  }
}

</script>

<style lang="css" scoped>
.search {
  margin: 0 auto;
  padding: 50px;
}

.results img {
    height: 300px;
    margin: 10px;
}
h1, h2 {
  font-weight: 300;
  font-size: 32px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

* {
  text-align: center;
}
</style>