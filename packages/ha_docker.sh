#!/bin/sh
# Forced command for the "ha-nas-docker" key on the Synology NAS: only list | start|stop|restart <container>.
# Comando forzato per la chiave "ha-nas-docker" sul NAS Synology: solo list | start|stop|restart <container>.
# Save it in the NAS user's home (e.g. /var/services/homes/nasuser/ha_docker.sh) and chmod 755.
D=/usr/local/bin/docker
set -- $SSH_ORIGINAL_COMMAND
case "$1" in
  list)
    $D ps -a --format '{{.Names}}|{{.State}}|{{.Status}}' | awk -F'|' 'BEGIN{printf "{\"containers\":["} {gsub(/"/,"",$3); printf "%s{\"name\":\"%s\",\"state\":\"%s\",\"status\":\"%s\"}", (NR>1?",":""), $1,$2,$3} END{print "]}"}';;
  start|stop|restart)
    case "$2" in ''|*[!A-Za-z0-9_.-]*) echo "invalid name" >&2; exit 2;; esac
    $D "$1" "$2" >/dev/null && echo ok;;
  *) echo "command not allowed" >&2; exit 2;;
esac
