document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = document.getElementById('temperature').value;
    const scale = document.querySelector('input[name="scale"]:checked').value;
    const resultElement = document.getElementById('result');
  
    if (isNaN(tempInput) || tempInput === '') {
      resultElement.innerHTML = "Please enter a valid number.";
      return;
    }
  
    const temp = parseFloat(tempInput);
  
    let convertedTemp = '';
  
  
    if (scale === 'celsius') {
      convertedTemp = `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F | ${(temp + 273.15).toFixed(2)}K`;
    } else if (scale === 'fahrenheit') {
      convertedTemp = `${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else if (scale === 'kelvin') {
      convertedTemp = `${temp}K = ${(temp - 273.15).toFixed(2)}°C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }
  
    
    resultElement.innerHTML = convertedTemp;
  });
  