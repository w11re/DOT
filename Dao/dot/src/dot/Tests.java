package dot;

enum testType {
	Traditional, Passage, Conveyor;
}
public class Tests {
	int testID;
	testType type;
	String passage;
	
	public int getTestID() {
		return testID;
	}
	public void setTestID(int testID) {
		this.testID = testID;
	}
	public String getType() {
		return type.name();
	}
	public void setType(String a) {
		this.type = testType.valueOf(a);
	}
	public String getPassage() {
		return passage;
	}
	public void setPassage(String passage) {
		this.passage = passage;
	}

}
