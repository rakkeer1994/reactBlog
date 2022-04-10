import React ,{ createContext, useState } from "react";

export const TourContext=createContext();

const TourDetails = (props) =>{
    let [Tourist,setTourist] =useState([
       
       {
        id:"1",
        name:"kashmir",
        image:"https://tse1.mm.bing.net/th?id=OIP.iW-fa75MkWoCdmPwyJcnSwHaE7&pid=Api&P=0&w=260&h=173",
        
        info:"Jammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains. ",
        date:"Tourism /22 jan 2022" ,
        description:"Some major tourist attractions in Jammu and Kashmir are Srinagar, the Mughal Gardens, Gulmarg, Pahalgam, Patnitop and Jammu. Every year, thousands of Hindu pilgrims visit holy shrines of Vaishno Devi and Amarnath which has had significant impact on the state's economy.",
       },
       {
        id:"2",
        image:"http://wirally.com/wp-content/uploads/2018/11/6-Reasons-To-Visit-Lambasingi-Kashmir-of-Andhra-Pradesh-This-Winter-Web.jpg",
        name:"Lammasingii",
        info:"Lambasingi is famous for its tea and coffee plantations along with little apple and strawberry farms. Moreover, the place is abounding with a variety of wildlife, flora, and fauna. ",
        date:"Tourism / 22 jan 2022 ",
        description:"The region was formerly densely covered in forests and known in the past to have supported tigers. The region is known for its diversity of birdlife. Apart, this little hamlet of Lambasingi is home to an isolated tribal community. ",
       },
       {
        id:"3",   
        image:"https://cdn1.goibibo.com/voy_ing/t_fs/india-goa-147105343003o.jpeg",
        name:"Goa-Holiday place to enjoy",
        info:"Goa is famous in India for a holiday destination, Goa Tourism & Travels is truly a traveler’s paradise. A perfect blend of Indian and Portuguese cultures.",
        date:"Tourism / 22 jan 2022",
        description:"The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.",
       },
       {
        id:"4",   
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTn9pxQ6emOjCtQ-A_8jffOede-JwQ-fvTVQ&usqp=CAU",
        name:"Kerala the best tourism place",
        info:"Kerala, located on the south-western tip of India, enjoys unique geographical features that have made it one of the most sought-after tourist destinations in Asia.",
        date:"Tourism / 22 jan 2022",
       description:"Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries. Other popular attractions in the state include the beaches at Kovalam, Muzhappilangad",
       } ,
    ]);

    let [Fitness,setFitness]=useState([
        
        {
            id:"5",
          image:"https://tse2.mm.bing.net/th?id=OIP.FiqbMTlxAQYypvwXzIAPqgHaDv&pid=Api&P=0&w=350&h=176" ,
          name:"Swimming" ,
          info:"Swimming is a great aerobic workout for people with most types of arthritis. It can take the load off your joints and help prevent injuries.",
          date:"Fitness/ 22 jan 2022",
       description:"Swimming has many more benefits that those obvious advantages seen on the surface; its improvements to overall health go much deeper.Swimming improves muscle definition and strength. Swimmers gain muscle strength throughout the entire body.",
        },
        {
            id:"6",
          image:"https://i.pinimg.com/736x/3a/a5/5c/3aa55c890be15c659e9defc2c213bffb.jpg",
          name:"Running",
          info:"While there exists the potential for injury while running (just as there is in any sport), there are many benefits. Some of these benefits include potential weight loss, improved cardiovascular",
          date:"Fitness/22 jan 2022",
       description:"Running is one of the best ways to boost your overall health. According to medical research, you can increase on your good cholesterol levels by running every day. It is also a great way to improve on lung function. ",
        },
        {
            id:"7",
            image:"https://tse2.mm.bing.net/th?id=OIP.sTv0Jzu_Q-KSV4463nvdoAHaFj&pid=Api&P=0&w=226&h=170",
            name:"Proper-Diet",
            info:"A good diet can have many profound benefits on physical appearance  Having a healthy protein and unsaturated fat intake is good for the inside as well as the outside of your body,",
            date:"Fitness/22 jan 2022",
         description:"Diet (nutrition) A proper nutrition requires a proper ingestion and, also important, the absorption of vitamins, minerals, and food energy in the form of carbohydrates, proteins, and fats. Dietary habits and choices play a significant role in health and mortality.",
        },
        {
            id:"8",
            image:"https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg&ga=GA1.2.1478845952.1641254400",
            name:"Gym..",
            info:"Most people go to the gym to achieve physical fitness goals such as weight loss, muscle tone or increased endurance.But regularly working out at the gym can provide excellent emotional benefits, too.",
            date:"Fitness/ 22 jan 2022",
        description:"A gym is a place with a number of equipments and machines used by the people to do exercises. Gymnasia apparatuses such as barbells, jumping board, running path, tennis-balls, cricket field, and fencing area are used as exercises",
           },
    ])
    let [Technology,setTechnology] = useState([
        {
            id:"9",
            image:"https://1.bp.blogspot.com/-2G41xqhVg80/XaXvkx2z0-I/AAAAAAAAAFY/oyQM0YvdilEGm0PzKUcj6FEpkwa2GlhnQCLcBGAsYHQ/w1200-h630-p-k-no-nu/communication-digitale.gif",
            name:"Communication-Technology",
            info:"Communication is indeed rather essential in all aspects of our personal and professional life to express emotions, share information, exchange ideas and what not",
            date:"Technology/22 jan 2022",
        description:"Communication technology definition Communication technology refers to all the tools used to send, receive, and process information. In today’s fast climate, efficiency and convenience are the keys to successful communication technology.",
        },
        {
            id:"10",
            image:"https://www.trade.gov/sites/default/files/2020-09/Health%2025%20-%20MedTech.jpeg",
            name:"Medical-Technology",
            info:"Medical Technology can be defined as the technologies that diagnose, treat and/or improve a person’s health and wellbeing.",
            date:"Technology/22 jan 2022",
            description:"Medical technology includes medical and surgical procedures, drugs, equipment and facilities, and the organizational and supportive systems within which care is provided. ",
        },
        {
            id:"11",
            image:"https://tse1.mm.bing.net/th?id=OIP.4hFnQfuAVvzo4bheVeii-AHaE8&pid=Api&P=0&w=253&h=168",
            name:"Robot-Technology",
            info:"Robotics technology is a field which is related to artificial intelligence. It is the utilization of machines, operation, and designing robots for performing tasks that were done by humans",
            date:"Technology/22 jan 2022",
            description:"Robots are machines that can carry out complex actions automatically. They generally need three elements: sensors such as cameras, lidar, or microphones; actuators such as motors, pistons or artificial muscles, and controllers.",
        },

        {
            id:"12",
            image:"https://vir.com.vn/stores/news_dataimages/hung/122019/29/17/p24-digital-transformation-key-driver-for-agriculture.jpg",
            name:"Agricultural-Technology",
            info:"This technology refers to the technologies for machine production that are utilized on a farm.",
            date:"Technology/22 jan 2022",
         description:" Mechanical processing of soil so that it is in the proper physical condition for planting is usually referred to as tilling; adding nutrients and trace elements is called fertilizing.application of techniques to control the growth and harvesting of animal and vegetable products",
        },

    ]);

    let [Bollywood,setBollywood] = useState([
        {
            id:"13",
            image:"https://tse3.mm.bing.net/th?id=OIP.77SB9kgWTgjlrTgDvBZBhgHaEb&pid=Api&P=0&w=280&h=167",
            name:"Bahubali",
            info:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. ",
            description:"Near the ancient Indian kingdom of Mahishmati, an injured woman named Sivagami is seen exiting a cave down by a mountain waterfall carrying an infant. She kills two soldiers pursuing and attempts to cross a raging river, but slips and is washed away in the current.",
            date:'Bollywood /22 jan 2022',
            
        },
        {
            id:"14",
            image:"https://moviekoop.com/Images/Cover_Photos/r-rajkumar-Poster.jpg",
            name:"R-Rajkumar",
            info:"Rajkumar, an aimless youth, works for a drug baron and is sent to kill a rival dealer. His life is changed forever when he meets Chanda.",
            date:'Bollywood /22 jan 2022',
            description:"Romeo Rajkumar is an aimless youth who arrives in Dhartipur, a small town ruled by two drug barons named Shivraj Gurjar and his arch-enemy Manik Parmar, controlled by a Mafia don named Ajit Taaka, who operates in Hong Kong."
        },
        {
            id:"15",
            image:"https://1.bp.blogspot.com/-p1JKXAG6yi8/YNhQVtGsPwI/AAAAAAAAA5s/6ANoxm1wKr80QUDUdk0dQQs28Pb74ngUgCLcBGAsYHQ/w1200-h630-p-k-no-nu/images%25284%2529.jpg",
            name:"Pushpa-1",
            info:"Violence erupts between red sandalwood smugglers and the police charged with bringing down their organization",
            date:'Bollywood/ 22 jan 2022',
            description:"When DSP Govindappa raids them in the forest, Pushpa hides and recovers the stock, thereby gaining the trust of his employer Konda Reddy. With the help of novel ideas to smuggle the red sandalwood, he quickly rises through the ranks and becomes Konda Reddy's partner.",
        },
        {
            id:"16",
            image:"https://www.filmibeat.com/img/2017/08/kgf1-29-1503989563.jpg",
            name:"Kgf",
            info:"The movie dates back to 1951. Here, two incidents take place; The birth of the hero and other in the Kolar Gold Fields (K.G.F) they get gold.",
            date:'Bollywood /22 jan 2022',
            description:"Rocky soon rises in strength and power, rivaling Shetty's own. This attracts the attention of Andrews, who offers him Bombay in return for assassinating Garuda, Suryavardhan's elder son, who is to inherit KGF after his now-paralyzed father's passing.",
        },
    ]);

    let [Food,setFood]=useState([
        {
            id:"17",
           image:"data:image/jpeg;base64,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" ,
           name:"Hyderabadi-biriyani",
           info:"Hyderabadi biryani, also known as Hyderabadi dum biryani, is a style of biryani from Hyderabad, India made with basmati rice and meat (mostly chicken, Lamb Meat).",
           date:"Food/22 jan 2022",
           description:"Originating in the kitchens of the Nizam of Hyderabad, it combines elements of Hyderabadi and Mughlai cuisines. Hyderabad biryani is a key dish in Hyderabadi cuisine.Taste is fantastic when compared to other states biriyani",
        },
        {
            id:"18",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sapaketti_phat_khi_mao.jpg/408px-Sapaketti_phat_khi_mao.jpg" ,
            name:"Noodles",
            info:"Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.",
            date:"Food/22 jan 2022",
            description:"Noodles can be refrigerated for short-term storage or dried and stored for future use. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
         },
         {
             id:"19",
            image:"http://3.bp.blogspot.com/-GQTDywNt4Ks/U0dX3UPasgI/AAAAAAAAhy0/V5xXKzGXx2Q/s1600/Idli.jpg" ,
            name:"Idly",
            info:"Idli or idly are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. ",
            date:"Food/22 jan 2022",
            description:"Since plain idlis are mild in taste, a condiment is considered essential. Idlis are often served with chutneys (coconut based), sambar and Medu vada. However, this varies greatly by region and personal taste, it is also often served with kaara chutney (onion based) or spicy fish curries",
         },
         {
             id:"20",
            image:"https://thumbs.dreamstime.com/b/indian-chapati-roti-being-prepared-35010889.jpg" ,
            name:"Chapathi(Roti)",
            info:"Chapathi also known as roti, rotli, safati, shabaati, phulka, is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal.",
            date:"Food/22 jan 2022",
            description:"Chapatis are one of the most common forms of wheat bread which are a staple food in the Indian subcontinent. The carbonized wheat grains discovered at the excavations at Mohenjo-daro are of a similar variety to an endemic species of wheat still to be found in India today. ",
         },
    ])

console.log("hiiiiii")
return (
    <TourContext.Provider  value={{value1:[Tourist,setTourist],
                                   value2:[Fitness,setFitness],
                                   value3:[Technology,setTechnology],
                                   value4:[Bollywood,setBollywood],
                                   value5:[Food,setFood]}} >
    {props.children}
    </TourContext.Provider>
)
}
export default TourDetails