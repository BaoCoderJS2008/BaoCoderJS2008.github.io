#include <iostream>
using namespace std;
// Tìm kiếm tuyến tính
int linearSearch(int x, int arr[10]) {
  for (int i = 0; i < 10; i++) {
    if (arr[i] == x) return i;
  }
  return -1;
}
int main() {
  int n[10] = {
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22
  };
  cout << linearSearch(18, n) << endl;
  return 0;
}
