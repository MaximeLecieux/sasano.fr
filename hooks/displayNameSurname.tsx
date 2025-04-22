export const displayNameSurname = (firstname: string, lastname: string) => {
    console.log('displayNameSurname', firstname, lastname)
    
    return `${firstname} ${lastname ? lastname.charAt(0) + '.' : ''}`
}
