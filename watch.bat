"C:\Program Files (x86)\Git\bin\sh.exe" --login -i -c "find $(pwd)/src/ $(pwd)/test/ $(pwd)/libs/ -name "*.ts" | xargs node_modules/.bin/tsc -w -t ES5 --sourcemap --outDir bin/gen"