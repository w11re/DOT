package dot;

import java.io.Serializable;
import java.util.ArrayList;

public class UserProfile implements Serializable {
	int userID;
	String fName;
	String lName;
	String email;
	String password;

	ArrayList<Scores> scores = new ArrayList<Scores>();
	ScoresDAO muhdao = new ScoresDAO();
	
	public ArrayList<Scores> getScores() {
		return scores;
	}

	public void setScores(ArrayList<Scores> scores) {
		scores = muhdao.getScore(userID);
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public UserProfile() {

	}

	public UserProfile(int roll, String fName, String lName, String email) {
		this.userID = roll;
		this.fName = fName;
		this.lName = lName;
		this.email = email;
	}


}