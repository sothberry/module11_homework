function intervalUser(a,b) {
    let i = setInterval(() => {
      console.log(a++);
      if (a > b) clearInterval(i);
    }, 1000)
  }
  
  intervalUser(5, 15);