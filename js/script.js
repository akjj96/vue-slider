const app = new Vue({
    el:'#app',
    data:{
        slides: [
            {
                image: 'img1.jpg',
                title: 'corea',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img2.jpg',
                title: 'italia',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img3.jpg',
                title: 'marocco',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img4.jpg',
                title: 'praga',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img5.jpg',
                title: 'grecia',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        indexActive:0
        

    },
    methods:{
        nextSlide(){
            if(this.indexActive === 4){
                this.indexActive = 0
            }else{
                this.indexActive += 1
            }

        },
        prevSlide(){
            if(this.indexActive === 0){
                this.indexActive = 4
            }else{
                this.indexActive -= 1
            }

        },
        autoScroll(){
            
            this.intervalId = setInterval(()=>{
                this.nextSlide()
            },3000)

        },
        stopAutoscroll(){
            clearInterval(this.intervalId)
            this.intervalId = null
        }

    },
    mounted(){
        this.autoScroll()

    }

}); 




const slides = [
    {
        image: 'img1.jpg',
        title: 'corea',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img2.jpg',
        title: 'italia',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img3.jpg',
        title: 'marocco',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img4.jpg',
        title: 'praga',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img5.jpg',
        title: 'grecia',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);