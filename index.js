/**
 * QUICK SORT
 * Алгоритм
 * 1. Выбрать опорный элемент
 * 2. Разделить массив на два подмассива: элементы больше и меньше опорного.
 * 3. Рекурсивно применить сортировку к двум подмассивам.
 *
 * --- -- - -
 *
 * Сложность QUICK SORT:
 * в худшем случае (@#!) будет О(n^2).
 * Сложность будет зависит от того, какой элемент мы выберем в качестве опорного.
 *
 * В лучшем случае - O(logN * n), он же средний )))
 */

/**
 * Выбираем опорный элемент из массива.
 * Это может быть любой элемент, но лучше брать из середины (лучше для O-большого).
 *
 * Проходим по массиву и делим его на две части:
 * в первый массив кладем все элементы котор. меньше опорного,
 * во втрой - элементы, котор больше опорного.
 *
 * Применяем имеющийся алгоритм для уже сформированного подмассива.
 *
 * Повторяем до тех пор, пока не наступит базовый случай,
 * при котором не нужно ничего сортировать.
 */

const test = [3, 1, 7, 2, 11, 4, -6, 12, 5, 0];
const testA = [2];

/// Вариант 1 - Реализация алгоритма с созданием подмассива
const quickSort = (array) => {
  /// массив состоит из одного элемента
  /// это базовый случай
  if (array.length < 2) {
    return array;
  }

  /// @#! const pivot = array[0]; - не лучший выбор, так как будет увеличиваться сложность O-большое

  /// для опорного элемента берем элемент из середины массива
  const pivotIndex = Math.floor(array.length / 2);

  /// pivot - опорный элемент (в данном случае - середина)
  const pivot = array[pivotIndex];

  /// в less будем добавлять элементы, значение которых будут меньше значения опорного элемента pivot
  const less = [];

  /// в greater будем добавлять элементы, значение которых будут больше значения опорного элемента pivot
  const greater = [];

  /// i = 1 - т.к. для опорного элемента pivot выбрали первый элемент массива (@#!)
  // @#! for (let i = 1; i < array.length; i++) {

  for (let i = 0; i < array.length; i++) {
    /// если идем по @#!, то этот if не нужен
    if (i === pivotIndex) {
      continue;
    }

    if (array[i] <= pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  // console.log(less, pivot, greater);

  /**
   * Сначала завершится рекурсия по quickSort(less)
   * pivot - после первого прохода станет по середине
   * в конце закончатся рекурсии по quickSort(greater)
   */
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log('res1:', quickSort(test)); /// 0 1 2 3 4 5 7 11 12
console.log('res12:', quickSort(testA)); /// 2

/// Вариант 2 - Реализация алгоритма быстрой сортировки с перестановкой элементов
/// Это вариант с мутированием данных (НЕ лучший выбор)
/// Подробное описание: https://www.guru99.com/quicksort-in-javascript.html

const quickSortV2 = (array) => {
  return quickSortHelper(array, 0, array.length - 1);
};

/// right - последний элемент
function quickSortHelper(array, left, right) {
  if (array.length < 2) {
    /// в этом if базовый случай.
    return array;
  }

  const index = partition(array, left, right);

  if (left < index - 1) {
    /// index - 1 - меняем правую границу
    quickSortHelper(array, left, index - 1);
  }

  if (index < right) {
    /// тут меняем правую границу
    quickSortHelper(array, index, right);
  }

  return array;
}

function partition(array, left, right) {
  /// для опорного элемента берем серединку мужду left и right
  const pivot = array[Math.floor((left + right) / 2)];

  /**
   * будем двигаться по левой границе пока индексы не совпадут
   */

  while (left <= right) {
    while (array[left] < pivot) {
      /// прибавляем левую границу
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log('res2:', quickSortV2(test));
console.log('res22:', quickSortV2(testA)); /// 2
