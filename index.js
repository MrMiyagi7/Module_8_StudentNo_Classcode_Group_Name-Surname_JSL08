let bankBranchInstance = null;

class BankBranch {
  constructor(branchInfo) {
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    } else {
      return bankBranchInstance;
    }
  }
  getBranchInfo() {
    return this.branchInfo;
  }
}
branchMain = new BankBranch({
  bankName: "Singleton main",
  address: "23 Singleton road ",
});
branchSecondary = new BankBranch({
  bankName: "Singleton Secondary",
  address: "56 javascript Street",
});

console.log(branchMain.getBranchInfo());
console.log(branchSecondary.getBranchInfo());

if (branchMain.getBranchInfo() === branchSecondary.getBranchInfo()) {
  console.log(
    "Both the Main branch and the Secondary Branch point to the same instance"
  );
} else {
  console.log("The branches do not point to the same instance");
}
