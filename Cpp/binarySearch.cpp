#include <iostream>
using namespace std;

// tìm kiếm nhị phân

int binarySearch(int arr[], int x, int n) {
  int l = 0;
  int r = n - 1;
  while (l <= r) {
    int mid = (l + r) / 2;
    if (arr[mid] == x) return mid;
    else if (arr[mid] > x) r = mid - 1;
    else if (arr[mid] < x) l = mid + 1;
  }
  return -1;
}
int main() {
  int arr[] = {
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  };
  int n = sizeof(arr) / sizeof(arr[0]);
  cout << binarySearch(arr, 70, n) << endl;
  return 0;
}
