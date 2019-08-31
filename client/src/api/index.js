import axios from 'axios';

export default {
	async getPins(){
		return await axios.get('http://localhost:5000/pins');
	},

	async createPin(data){
		return await axios.post('http://localhost:5000/pins', data);
	},

	async deletePin(pinId){
		return await axios.delete(`http://localhost:5000/pins/${pinId}`);
	}
}