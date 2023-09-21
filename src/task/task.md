任务一： 
    主页显示文章列表，每篇文章可以被阅读，阅读后可以点赞，点赞数初始为0;
    并把代码上传到gitee或者github代码库进行管理。
    主要步骤和代码：

    1.在Home.vue中显示文本，用属性v-html和v-text显示出来。v-html是用于将rawHtml变量的值作为HTML内容插入到元素中；而v-text指令用于将表达式的值作为纯文本插入到元素中，不会解析html标签。
    设置变量rawHtml
    代码：
        <div v-html="rawHtml"></div>
        <div v-text="rawHtml"></div>
    在data方法中，表达式rawHtml的值为'<h3>测试</h3>'，网页就会显示“<h3>测试</h3>”
    2.用<img v-bind:src="src">插入图片，其中src是图片的路径。其路径在data方法中设置，就可以在网页中显示图片了。
    3.用“<button v-on:click="doFavor">点赞</button>”设置按钮的点击事件。用count设置数量。当点击按钮时，调用doFavor方法，每点击一次，count+1。
    代码：
        <script>
    export default{
        data(){
            return{
                rawHtml:'<h3>测试</h3>',
                src:"https://th.bing.com/th/id/OIP.tmvIu57hTRpXhPRWkBDDEQHaEK?w=328&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                count:0
            }
        },
        methods:{
            doFavor(){
                this.count++
            }
        }
    }
    