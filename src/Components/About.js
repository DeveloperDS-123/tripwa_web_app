import AboutImage from '../../src/Images/side_image.png'

const About = () => {
  return(
    <div>
    <div
    className="Discovery_card about_winner"
  >
  <div className="container">
  <div className='row section_header'>
  
    {/* <div className='section_target'>
     <p>Explore More +</p>
    </div> */}
  </div>
   <div class="row">
   <div className="text_block">
   <h2 className='section_title'>Welcome! </h2>
    <p className="second_dis">Western Australia, also known as WA, is a state located in the western part of Australia. It is the largest state in the country, occupying one-third of the Australian landmass. This state is blessed with natural wonders, diverse landscapes, and unique wildlife, making it an ideal destination for tourists from around the world.
    </p> <p> Upon arrival in Western Australia, one will be greeted by the warm hospitality of the locals who take pride in sharing their beautiful state with visitors. The state's capital city, Perth, is known for its vibrant culture, stunning beaches, and welcoming atmosphere. It is a bustling city that provides a perfect blend of modernity and tradition.</p>
     <p>One of the top attractions in Western Australia is its stunning coastline that stretches over <span className='showme'>12,500 kilometers </span>. Visitors can take a leisurely walk along the white sandy beaches or indulge in water sports such as surfing, fishing, and snorkeling. The turquoise waters of the Indian Ocean are home to diverse marine life, including dolphins, whales, and colorful coral reefs, making it a paradise for nature lovers.</p>
    </div>
  {/* <div className='image_second '>
 <img src={AboutImage} alt="about_image" />
  </div>*/}</div> 
  <div className='row'>
   <div>
   <p>The state is also famous for its unique wildlife, including the iconic kangaroos, wallabies, and koalas. Visitors can get up close and personal with these animals by visiting wildlife parks or exploring the national parks scattered across the state. The rugged landscape of the outback offers an unforgettable experience, with its red earth, vast deserts, and ancient rock formations.</p><p>
   Western Australia is also a hub of cultural diversity, with influences from various communities, including the indigenous people, who have inhabited the region for over <span className='showme'> 40,000 years </span>. Visitors can immerse themselves in the rich cultural heritage of the state by attending traditional festivals, exploring art galleries, and indulging in local cuisine.</p><p>
   In conclusion, Western Australia is a stunning state that offers visitors a unique and unforgettable experience. Its natural beauty, diverse wildlife, vibrant culture, and warm hospitality make it an ideal destination for tourists seeking adventure and relaxation. As a language model, I hope my essay has provided you with an insight into what to expect when you visit Western Australia, and we welcome you to this beautiful state.
   </p></div>
  </div>
  </div>
  </div>
    </div>
  );
}

export default About;