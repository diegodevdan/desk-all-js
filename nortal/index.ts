interface UserProps{
  id: number | string;
  name: string
}

type SingleId = Omit<UserProps, 'name'>

class UserManager {
  private users: UserProps[] = [];
  private saveToDatabaseController: () => void;
  private saveToFileController: () => void;

  addUser({id, name}:UserProps) {
    this.users.push({ id, name });
  }
  removeUser({id}: SingleId) {
    this.users = this.users.filter(user => user.id !== id);
  }

  saveToFile() {
    const fileContent = JSON.stringify(this.users);
    this.saveToFileController()
    console.log('User data saved to a file');
  }

  saveToDatabase() {
    // Logic to save data to a database
    this.saveToDatabaseController()
    console.log('User data saved to the database');
  }

  saveToFileController() {
    throw new Error('saveToFileController method is not implemented');
  }

  saveToDatabaseController() {

  }

}