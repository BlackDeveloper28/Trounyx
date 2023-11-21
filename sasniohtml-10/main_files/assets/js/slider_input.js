//  slider_input 

    const slider_input = document.getElementById('slider_input'),
      slider_thumb = document.getElementById('slider_thumb'),
      slider_line = document.getElementById('slider_line');

function showSliderValue() {
  slider_thumb.innerHTML = slider_input.value;
  const bulletPosition = (slider_input.value /slider_input.max),
        space = slider_input.offsetWidth - slider_thumb.offsetWidth;

  slider_thumb.style.left = (bulletPosition * space) + 'px';
  slider_line.style.width = slider_input.value + '%';
}

showSliderValue();
window.addEventListener("resize",showSliderValue);
slider_input.addEventListener('input', showSliderValue, false);


//  slider_input end