package dot;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ScoresDAO {
	Connection connection = null;
	PreparedStatement ptmt = null;
	ResultSet resultSet = null;

	private Connection getConnection() throws SQLException {
		Connection conn;
		conn = ConnectionFactory.getInstance().getConnection();
		return conn;
	}
	
	private void addScore(Scores s) {
		try {
			String queryString = "INSERT INTO scores(userID, testWPM, testID) VALUES(?,?,?)";
			connection = getConnection();
			ptmt = connection.prepareStatement(queryString);
			ptmt.setInt(1, s.getUserID());
			ptmt.setInt(2, s.getTestWPM());
			ptmt.setInt(3, s.getTestID());
			ptmt.executeUpdate();
			System.out.println("Data Added Successfully");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (ptmt != null)
					ptmt.close();
				if (connection != null)
					connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}

		}
	}
	
	public ArrayList<Scores> getScore(int userID) {
		ArrayList<Scores> scores = new ArrayList<Scores>();
		try {
			String queryString = String.format("SELECT * FROM scores WHERE userID = '%s'", userID);
			connection = getConnection();
			ptmt = connection.prepareStatement(queryString);
			resultSet = ptmt.executeQuery();
			while (resultSet.next()) {
				Scores score = new Scores();
				int scoreID = resultSet.getInt("scoresID");
				int tableUserID = resultSet.getInt("userID");
				int testWPM = resultSet.getInt("testWPM");
				int testID = resultSet.getInt("testID");
				
				System.out.println("scoresID " + scoreID
						+ ", userID " + tableUserID 
						+ ", testID " + testWPM 
						+ ", testID " + testID);
				
				score.setScoreID(scoreID);
				score.setUserID(tableUserID);
				score.setTestWPM(testWPM);
				score.setTestID(testID);
				
				scores.add(score);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (resultSet != null)
					resultSet.close();
				if (ptmt != null)
					ptmt.close();
				if (connection != null)
					connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}

		}
		return scores;
	}
	
}
