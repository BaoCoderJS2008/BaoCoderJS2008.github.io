#include <iostream>
using namespace std;
void swap(int *x, int *y) {
  int temp = *x;
  *x = *y;
  *y = temp;
}
void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    for (int j = n - 1; j > i; j--) {
      if (arr[j] < arr[j-1]) {
        swap(arr[j], arr[j-1]);
      }
    }
  }
}
int main() {
  int arr[] = {
    9, 5, 2, -10, 0, 3
  },
  n = sizeof(arr)/sizeof(int);
  bubbleSort(arr, n);
  for (int i = 0; i < n; i++) {
    cout << arr[i] << endl;
  }
  return 0;
}
