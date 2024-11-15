const findTheOldest = function(people) {
    const currentYear = new Date()
    return people.reduce((oldest, item) => {
        // Check oldest is empty
        if(!oldest.name) {
            return item
            
        }
        
        // Calculate age of oldest
        let oldestAge 
        if (oldest.yearOfDeath === undefined) {
            oldestAge =  currentYear.getFullYear() - oldest.yearOfBirth
        } else {
            oldestAge =  oldest.yearOfDeath - oldest.yearOfBirth
        }
        
        // Calculate age of person
        let age  
        if (item.yearOfDeath === undefined) {
            age =  currentYear.getFullYear() - item.yearOfBirth
        } else {
            age = item.yearOfDeath - item.yearOfBirth
        }
        
        // Find new oldest person
        if (age > oldestAge) {
            return item
        } else return oldest
        
    }, {})
}
;

// Do not edit below this line
module.exports = findTheOldest;
