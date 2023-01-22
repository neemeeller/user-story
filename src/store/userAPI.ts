export const fetchUsersData = async () =>{
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  return await result.json();
}