import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sort"
})
export class ArraySortPipe implements PipeTransform {
    transform(array: any, field: string): any[] {
        if (!Array.isArray(array)) {
            return;
        }
        array.sort(function (a, b) {
            if (a.key < b.key) { return -1; }
            if (a.key > b.key) { return 1; }
            return 0;
        });

        array.sort(function (a, b) {
            return b.value.count - a.value.count;
        });
        return array;
    }
}