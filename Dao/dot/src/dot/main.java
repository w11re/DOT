package dot;

public class main {
	public static void main(String[] args) {
		UserDAO testD = new UserDAO();
		UserProfile test = new UserProfile();
		test.setfName("A");
		test.setlName("B");
		test.setEmail("C");;
		test.setPassword("D");
		// Adding Data
		testD.addUser(test);
		testD.findAll();
		testD.delete("Email2");
		testD.findAll();

	}
}

