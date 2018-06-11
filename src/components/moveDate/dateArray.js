const moveDate = new Date();
const dateOptions1 = []
const dateOptions2 = []
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

const dateArray = () => {
	months.forEach((month, i) => {
	    if (i < Number(moveDate.getMonth())) {
	    	dateOptions1.push(month + '/01/' + Number(moveDate.getFullYear()+1))
	    } else {
	      	dateOptions2.push(month + '/01/' + moveDate.getFullYear())
	    }
	})

	dateOptions1.forEach(date => dateOptions2.push(date))
	
	return dateOptions2
}

export default dateArray
