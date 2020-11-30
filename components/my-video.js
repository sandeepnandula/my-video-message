import { LitElement, html, css } from 'lit-element';

class MyVideo extends LitElement {
    static get styles() {
        return css`
            video {
                width: 400px;
                height: 400px;
            }
        `
    }
    constructor() {
        super();
        this.cameraStream = null;
    }
    /**
   * Called when the element is added to the page, useful for setup work which
   * requires access to the DOM. However, your element has not done it's initial
   * render here yet.
   *
   * Can be called multiple times when your element is moved around on the page,
   * for example when using drag & drop.
   *
   * You might need to make sure your setup work runs only once, or you can clean
   * it up in the disconnectedCallback.
   *
   * Because LitElement does some work in the connectedCallback, you must always
   * call super.connectedCallback. This one is easy to miss!
   */
    // similar to the componentDidMount
    connectedCallback() {
        super.connectedCallback();
        this.attachVideoStreamToLocalState();
    }

    async attachVideoStreamToLocalState() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            this.cameraStream = stream;
            this._attachVideoStreamToLocalTag({ stream });
        } catch (error) {
            console.error(error)
        }
    }

    _attachVideoStreamToLocalTag({ stream }) {
        const videoRef = this.shadowRoot.querySelector('#my-video-tag');
        console.log(videoRef)
        videoRef.srcObject = stream;

    }

    // static get properties() {
    //     return { prop: propType };
    // }

    render() {
        return html`<video id='my-video-tag' autoplay></video>`
    }
}
customElements.define('my-video', MyVideo);