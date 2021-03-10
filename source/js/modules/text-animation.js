class TextAnimation {
  constructor(elemSelector, obj = false) {
    this.elemSelector = elemSelector;
    this.elem = document.querySelector(this.elemSelector);
    this.elemText = this.elem.textContent;

    this.delay = obj.delay ? obj.delay : undefined;
    this.changeddelay = this.delay;

    this.speed = obj.speed ? obj.speed : undefined;

    this.timingFunction = obj.timingFunction ? obj.timingFunction : undefined;

    this.elem.classList.add(`text-animation`);
    this.createParentSpan();
  }

  createSpan(value) {
    let span = document.createElement(`span`);
    let spanProperties = `animation-name: letterAnimation;`;

    if (this.delay) {
      spanProperties += `animation-delay:${this.changeddelay}s;`;
      this.changeddelay += this.delay;
    } else {
      spanProperties += `animation-delay:.20s;`;
    }

    if (this.timingFunction) {
      spanProperties += `animation-timing-function:${this.timingFunction};`;
    } else {
      spanProperties += `animation-timing-function:ease;`;
    }

    if (this.speed) {
      spanProperties += `animation-duration:${this.speed}s;`;
    } else {
      spanProperties += `animation-duration:.5s`;
    }

    if (spanProperties.length >= 1) {
      span.style.cssText = `${spanProperties}`;
    };
    span.classList.add(`text-animation__item`);
    span.textContent = value;
    return span;
  }

  separationText(text, separator) {
    return text.split(separator);
  }

  createParentSpan() {
    const createSpan = this.createSpan.bind(this);
    const textArray = this.elemText.trim().split(` `);

    const wrappLetter = textArray.reduce(function (beforeVal, currentVal) {

      const letterElement = Array.from(currentVal).reduce(function (initVal, latter) {
        initVal.appendChild(createSpan(latter));
        return initVal;
      }, document.createDocumentFragment());

      const lattersWrp = document.createElement(`span`);
      lattersWrp.classList.add(`text-animation__wrp`);
      lattersWrp.appendChild(letterElement);
      beforeVal.appendChild(lattersWrp);
      return beforeVal;
    }, document.createDocumentFragment());

    this.elem.textContent = ``;
    this.elem.appendChild(wrappLetter);
  }
}

export default TextAnimation;
