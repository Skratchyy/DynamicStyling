const app = Vue.createApp({
    data() {
        return {
            className: '',
            hidden: false,
            hiddenClass: '',
            colorChange: ''
        }
    },
    methods: {
        colorChangeEvent(event) {
            this.colorChange = event.target.value
        },
        getClass(event) {
            this.className = event.target.value;

        },
        visibility() {
            this.hidden = !this.hidden;
            if (this.hidden === true) {
                this.hiddenClass = 'hidden'
            } else {
                this.hiddenClass = 'visible'
            }
        }
    }
})

app.mount(assignment);