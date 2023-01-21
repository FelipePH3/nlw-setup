 const form = document.querySelector('#form-habits')
 const nlwSetup = new NLWSetup(form)
   const button = document.querySelector('header button')
 button.addEventListener('click', add)
 form.addEventListener('change', save)
 
 
 function add(){
   const today = new Date().toLocaleString('pt-br').slice(0, 5)
   const dayExists = nlwSetup.dayExists(today)
   if (dayExists) {
      alert('dia ja incluso')
   }
   nlwSetup.addDay(today)
 }

 function save() {
   localStorage.setItem('NLWsetup@habits', JSON.stringify(nlwSetup.data))
 }
   //const data = {
//  oclin: ['01-01', '01-02', '01-06'],
  //  cabuloso: ['01-04', '01-05'],
   // dj: ['01-01', '01-03'],
 //}
 //nlwSetup.setData(data)
// nlwSetup.load()
 const data = JSON.parse(localStorage.getItem('NLWsetup@habits')) || {}
 nlwSetup.setData(data)
 nlwSetup.load()