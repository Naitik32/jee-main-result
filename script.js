// Simulate loading delay
window.addEventListener('load', function () {
  setTimeout(function () {
    // Hide loading screen
    document.getElementById('loadingScreen').style.display = 'none';
    // Show main content
    document.getElementById('mainContent').style.display = 'block';
  }, 3000); // 3 seconds delay
});

// Existing form submission logic
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulate fetching result data (replace with actual API call)
  const rollNumber = document.getElementById('rollNumber').value;
  const dob = document.getElementById('dob').value;

  // Example result data
  const resultData = {
    applicationNumber: '250310459105',
    rollNumber: 'MR07101684',
    name: 'NATITE SINGH BHADORWA',
    motherName: 'IGRAN BHADORWA',
    fatherName: 'NARENDRA SINGH BHADORWA',
    category: 'General',
    pwd: 'No',
    gender: 'Male',
    dob: '01/08/2006',
    state: 'MADHYA PRADESH',
    nationality: 'Indian',
    physics: '59.4254417',
    chemistry: '98.8152454',
    mathematics: '98.2743627',
    total: '94.8746690',
    totalInWords: 'Ninety Four point Eight Seven Four Six Six Nine Zero Only',
    resultDate: '11.02.2025'
  };

  // Display result details
  document.getElementById('result').innerHTML = `
    <h2>Result Details</h2>
    <table>
      <tr>
        <th>Application Number</th>
        <td>${resultData.applicationNumber}</td>
        <th>Roll No. (Session 1)</th>
        <td>${resultData.rollNumber}</td>
        <td><button>Print</button></td>
        <td><button>Close</button></td>
      </tr>
      <tr>
        <th>Candidate's Name</th>
        <td colspan="5">${resultData.name}</td>
      </tr>
      <tr>
        <th>Mother's Name</th>
        <td colspan="5">${resultData.motherName}</td>
      </tr>
      <tr>
        <th>Father's Name</th>
        <td colspan="5">${resultData.fatherName}</td>
      </tr>
      <tr>
        <th>Category</th>
        <td>${resultData.category}</td>
        <th>Person with Benchmark Disability (PwBD)</th>
        <td>${resultData.pwd}</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td>${resultData.gender}</td>
        <th>Date of Birth</th>
        <td>${resultData.dob}</td>
      </tr>
      <tr>
        <th>State of Eligibility</th>
        <td>${resultData.state}</td>
        <th>Nationality</th>
        <td>${resultData.nationality}</td>
      </tr>
    </table>

    <h3>Subject-Wise Marks and Percentile</h3>
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>NTA Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Physics</td>
          <td>${resultData.physics}</td>
        </tr>
        <tr>
          <td>Chemistry</td>
          <td>${resultData.chemistry}</td>
        </tr>
        <tr>
          <td>Mathematics</td>
          <td>${resultData.mathematics}</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Total (in figures):</strong> ${resultData.total}</p>
    <p><strong>Total in Words:</strong> ${resultData.totalInWords}</p>

    <p>Date of declaration of result: ${resultData.resultDate}</p>
  `;

  // Show the result container
  document.getElementById('result').style.display = 'block';
});
