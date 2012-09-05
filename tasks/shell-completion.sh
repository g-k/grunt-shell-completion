# completion for grunt
function grunt_tasks {
    reply=(`grunt --no-color list`)
}
compctl -K grunt_tasks grunt
